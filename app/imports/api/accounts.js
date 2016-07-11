import { Meteor } from 'meteor/meteor';
import { AccountsServer } from 'meteor/accounts-base';

// Creating super admin on application creation

Meteor.startup(() => {

  if (Meteor.users.find().count() === 0) {

    Accounts.createUser({
      email: Meteor.settings.adminEmail,
      password: Meteor.settings.adminPassword,
    });

    let adminUser = Accounts.findUserByEmail(Meteor.settings.adminEmail);

    Roles.addUsersToRoles(adminUser._id, 'superadmin', Roles.GLOBAL_GROUP);

  }

});

// Setting user roles on signup

Accounts.onCreateUser((options, user) => {

  Roles.addUsersToRoles(user._id, ['create-application', 'edit-application', 'submit-application'], 'applicants');

  return user;
});
