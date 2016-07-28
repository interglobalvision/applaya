import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

export const adminAddUser = new ValidatedMethod({
  name: 'admin.newUser',

  validate({ doc }) {

    return new SimpleSchema({
      doc: {
        type: Object
      },
      'doc.email': {
        type: String
      },
      'doc.role': {
        type: String,
        allowedValues: ['Admin', 'Committee']
      }
    }).validate({
      doc
    });
  },

  run( doc ) {

    if (!Roles.userIsInRole(this.userId, 'superadmin')) {
      throw new Meteor.Error('Admin.methods.add-user.not-allowed', 'Must be superadmin to do this.');
    }

    if (Meteor.isServer) {

      let role = doc.doc.role.toLowerCase();

      if (Accounts.findUserByEmail(doc.doc.email)) {
        throw new Meteor.Error('Admin.methods.add-user.already-exists', 'User with same email already exists.');
      }

      Accounts.createUser({
        email: doc.doc.email
      });

      let newUser = Accounts.findUserByEmail(doc.doc.email);

      Roles.addUsersToRoles(newUser._id, role);

      Accounts.sendEnrollmentEmail(newUser._id);

    }

  },
});

export const deleteUser = new ValidatedMethod({
  name: 'admin.deleteUser',

  validate({ userId }) {

    return new SimpleSchema({
      userId: {
        type: String
      }
    }).validate({
      userId
    });
  },

  run( args ) {

    let userId = args.userId;

    if (!Roles.userIsInRole(this.userId, 'superadmin')) {
      throw new Meteor.Error('Admin.methods.add-user.not-allowed', 'Must be superadmin to do this.');
    }

    if (userId === this.userId) {
      throw new Meteor.Error('Admin.methods.add-user.no-selfdestruct', 'You can\'t delete yourself.');
    }

    if (Meteor.isServer) {
      Meteor.users.remove(userId);
    }

  },
});