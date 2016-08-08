import { AccountsCommon } from 'meteor/accounts-base';
import { AccountsServer } from 'meteor/accounts-base';

export const setupApplicant = new ValidatedMethod({
  name: 'account.setupApplicant',

  // This doesn't receive any arguments, so we don't need validation
  validate: null,

  run() {

    if (!this.userId) {
      throw new Meteor.Error('Accounts.methods.not-logged-in', 'Must be logged in to setup applicant.');
    }

    Roles.addUsersToRoles(this.userId, ['applicant']);

  },
});

export const setAccountLocale = new ValidatedMethod({
  name: 'account.setLocale',

  validate: new SimpleSchema({
    locale: {
      type: String,
    }
  }).validator(),

  run(locale) {
    Meteor.users.update(this.userId, { $set: {'profile.lang': locale} });
  },
});
