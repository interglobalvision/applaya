import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { SingleLayout } from '/imports/components/single/singleLayout.jsx';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

const composer = (props, onData) => {

  const applicationId = props.applicationId;
  const subscription = Meteor.subscribe('admin.application.single', applicationId);

  // Check if subscription is ready
  if (subscription.ready()) {

    console.log(subscription);
    console.log(applicationId);

    const user = !!Meteor.user() ? Meteor.user() : null;

    // Wait for user subscription (kinda)
    if (user) {

      // And check roles
      if (Roles.userIsInRole(user._id, ['superadmin', 'committee'])) {

        let application = Applications.findOne({ applicationId });

        console.log(application);

        let sections = ApplicationSections.find({ applicationId: application._id }, { sort: [] });

        onData(null, { user, application, sections });

      } else {
        FlowRouter.go('/unauthorized');
      }

    } else {
      // We return an empty user to make applyLayout show the login form
      onData(null, { user: null });
    }

  }
};

export const SingleContainer = composeWithTracker(composer)(SingleLayout);
