import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { SubmitLayout } from '/imports/components/submit/SubmitLayout.jsx';

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

        let application = Applications.findOne({ userId: user._id });

        // Route according to status
        if (application.status.complete === false) {
          return FlowRouter.go('/apply/section/1');
        } else if (application.status.submitted === true) {
          return FlowRouter.go('/apply/pay');
        } else if (application.status.paid === true) {
          return FlowRouter.go('/apply/thanks');
        }

        let sections = ApplicationSections.find(
          { applicationId: application._id },
          { sort: {
            step: 1,
          } }).fetch();

        onData(null, { user, application, sections });

      } else {
        FlowRouter.go('/unauthorized');
      }

    } else {
      // We return an empty user to make paymentLayout show the login form
      onData(null, { user: null });
    }

  }
};

export const SubmitContainer = composeWithTracker(composer)(SubmitLayout);
