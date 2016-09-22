import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { SubmitLayout } from '/imports/components/submit/SubmitLayout.jsx';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

const composer = (props, onData) => {

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

        // Check if time is after deadline
        if (moment() > moment(Meteor.settings.public.applicationDeadline, Meteor.settings.public.dateFormat) && application.status.extended === false) {
          return FlowRouter.go('/applications-closed');
        }

        // Check if time is after extended deadline
        if (moment() > moment(Meteor.settings.public.applicationExtension, Meteor.settings.public.dateFormat)) {
          return FlowRouter.go('/applications-closed');
        }

        let status = application.status;

        // Route according to status
        if (status.complete === false) {
          return FlowRouter.go('/apply/section/');
        } else if (status.submitted === true) {
          return FlowRouter.go('/apply/pay');
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
