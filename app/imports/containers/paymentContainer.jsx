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

          // TODO: Check if application is fully validated

          const amount = props.amount || null;
          const description = props.description || null;

          onData(null, { application, amount, description });

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
