import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { PaymentLayout } from '/imports/components/payment/PaymentLayout.jsx';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

const composer = (props, onData) => {
  // Check if time is after deadline
  if (moment() > moment(Meteor.settings.public.applicationDeadline, Meteor.settings.public.dateFormat)) {
    return FlowRouter.go('/applications-closed');
  }

  const subscription = Meteor.subscribe('application.single');

  // Check if subscription is ready
  if (subscription.ready()) {

    // Set some data
    const user = !!Meteor.user() ? Meteor.user() : null;

    // Wait for user subscription (kinda)
    if (user) {

      // Check roles
      if (Roles.userIsInRole(user._id, [ 'applicant' ])) {

        // Look for user's application
        let application = Applications.findOne({ userId: user._id });

        if (!!application) {

          // Route according to status
          if (application.status.complete === false) {
            return FlowRouter.go('/apply/section/1');
          } else if (application.status.submitted === false) {
            return FlowRouter.go('/apply/submit');
          } else if (application.status.paid === true) {
            return FlowRouter.go('/apply/thanks');
          }

          // TODO: Check if application is fully validated

          onData(null, { application });

        } else {
          FlowRouter.go('/');
        }

      } else {
        FlowRouter.go('/unauthorized');
      }

    } else {
      // We return an empty user to make paymentLayout show the login form
      onData(null, { user: null });
    }

  }
};

export const PaymentContainer = composeWithTracker(composer)(PaymentLayout);
