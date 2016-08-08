import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

export const adminAddUser = new ValidatedMethod({
  name: 'admin.newUser',

  validate: new SimpleSchema({
    email: {
      type: String
    },
    role: {
      type: String,
      allowedValues: ['admin', 'committee']
    }
  }).validator(),

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
        email: doc.email
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
      throw new Meteor.Error('Admin.methods.add-user.not-allowed', 'Must be admin to do this.');
    }

    if (userId === this.userId) {
      throw new Meteor.Error('Admin.methods.add-user.no-selfdestruct', i18n.__('notifications.removeUser.yourself'));
    }

    if (Meteor.isServer) {
      const email = Meteor.user(userId).emails[0].address;

      Meteor.users.remove(userId);

      const message =  i18n.__('notifications.removeUser.success', { email });

      return { message };
    }

  },
});
