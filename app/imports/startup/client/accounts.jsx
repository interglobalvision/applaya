import { Accounts } from 'meteor/std:accounts-ui';

import { setAccountLocale } from '/imports/api/methods/accountMethods.js';
import { setupApplicant } from '/imports/api/methods/accountMethods.js';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',
  onSignedInHook: () => {
    const user = Meteor.user();

    // set active locale to user lang pref
    if (!_.isUndefined(user.profile.lang)) {
      i18n.setLocale(user.profile.lang);
    }

    if (Roles.userIsInRole(user._id, [ 'applicant' ])) {
      FlowRouter.go('/apply');
    } else if (Roles.userIsInRole(user._id, [ 'admin' ])) {
      FlowRouter.go('/admin');
    }
  },
  onSignedOutHook: () => FlowRouter.go('/'),
  onPostSignUpHook: () => {
    // set lang pref in user.profile
    const locale = i18n.getLocale();
    setAccountLocale.call({locale});

    setupApplicant.call({}, (err) => {
      if (err) {
        console.log(err);
        new Meteor.Error(err);
      } else {
        FlowRouter.go('/apply')
      }
    });
  }
});
