import { Accounts } from 'meteor/std:accounts-ui';

import { setupApplicant } from '/imports/api/methods/accountMethods.js';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',
  onSignedInHook: () => FlowRouter.go('/apply'),
  onSignedOutHook: () => FlowRouter.go('/'),
  onPostSignUpHook: () => {
    setupApplicant.call({}, (err) => {
      if (err) {
        onData(new Meteor.Error(err));
      } else {
        FlowRouter.go('/apply')
      }
    });
  }
});