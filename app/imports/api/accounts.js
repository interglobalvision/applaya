import { Meteor } from 'meteor/meteor';
import { AccountsServer } from 'meteor/accounts-base'

// Creating super admin on application creation

Meteor.startup(() => {

  if (Meteor.users.find().count() === 0) {

    Accounts.createUser({
      email: Meteor.settings.adminEmail,
      password: Meteor.settings.adminPassword
    });

  }

});