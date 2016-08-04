import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { SingleLayout } from '/imports/components/single/singleLayout.jsx';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

const composer = (props, onData) => {

  const applicationId = props.applicationId;
  const subscription = Meteor.subscribe('admin.application.single', applicationId);

  const user = !!Meteor.user() ? Meteor.user() : null;

  // Wait for user subscription (kinda)
  if (user) {

    // Check if subscription is ready
    if (subscription.ready()) {


      // And check roles
      if (Roles.userIsInRole(user._id, ['admin', 'committee'])) {

        let application = Applications.findOne(applicationId);
        let sections = ApplicationSections.find(
          { applicationId: application._id },
          { sort: {
            step: 1,
          } }).fetch();

        let applicationUser = Meteor.users.findOne(application.userId);

        onData(null, { user, application, sections, applicationUser });

      } else {
        FlowRouter.go('/unauthorized');
      }

    } else {
      // We return an empty user to make applyLayout show the login form
      onData(null, { user: null });
    }

  } else {
    // We return an empty user to make applyLayout show the login form
    onData(null, { user: null });
  }
};

export const SingleContainer = composeWithTracker(composer)(SingleLayout);