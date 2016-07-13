import { Accounts } from 'meteor/std:accounts-ui';

import { setupApplicant } from '/imports/api/methods/accountMethods.js';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',
  onSignedInHook: () => {
    const user = Meteor.user();

    if (Roles.userIsInRole(user._id, [ 'applicant' ])) {
      FlowRouter.go('/apply');
    } else if (Roles.userIsInRole(user._id, [ 'superadmin' ])) {
      FlowRouter.go('/admin');
    }
  },
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
