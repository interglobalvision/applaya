import { Accounts } from 'meteor/std:accounts-ui';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',
  onSignedInHook: () => FlowRouter.go('/apply'),
  onSignedOutHook: () => FlowRouter.go('/'),
});
