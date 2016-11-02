import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import { NewAdminUserSchema } from '/imports/schemas/newAdminUserSchema.js';

import { removeAllUserRatings } from '/imports/api/methods/ratingMethods.js';

export const adminAddUser = new ValidatedMethod({
  name: 'admin.newUser',

  validate: NewAdminUserSchema.validator(),

  run( doc ) {

    if (!Roles.userIsInRole(this.userId, 'admin')) {
      throw new Meteor.Error('Admin.methods.add-user.not-allowed', 'Must be admin to do this.');
    }

    if (Meteor.isServer) {

      if (Accounts.findUserByEmail(doc.email)) {
        throw new Meteor.Error('Admin.methods.add-user.already-exists', i18n.__('notifications.addUser.alreadyExists', {
          email: doc.email
        }));
      }

      Accounts.createUser({
        email: doc.email,
        profile: {
          name: doc.name,
        }
      });

      let newUser = Accounts.findUserByEmail(doc.email);

      Roles.addUsersToRoles(newUser._id, doc.role);

      Accounts.sendEnrollmentEmail(newUser._id);

      const message =  i18n.__('notifications.addUser.success', {
        role: doc.role,
        email: doc.email,
      });

      return { message };
    }
  },
});

export const removeUser = new ValidatedMethod({
  name: 'admin.removeUser',

  validate: new SimpleSchema({
    userId: {
      type: String
    }
  }).validator(),

  run( args ) {

    let userId = args.userId;

    if (!Roles.userIsInRole(this.userId, 'admin')) {
      throw new Meteor.Error('Admin.methods.remove-user.not-allowed', 'Must be admin to do this.');
    }

    if (userId === this.userId) {
      throw new Meteor.Error('Admin.methods.remove-user.no-selfdestruct', i18n.__('notifications.removeUser.yourself'));
    }

    if (Meteor.isServer) {
      const email = Meteor.user(userId).emails[0].address;

      let isCommittee = Roles.userIsInRole(userId, 'committee');

      Meteor.users.remove(userId);

      if(isCommittee) {
        removeAllUserRatings(userId);
      }

      const message =  i18n.__('notifications.removeUser.success', { email });

      return { message };
    }

  },
});
