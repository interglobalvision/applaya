import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { AdminIndexLayout } from '/imports/components/admin/adminIndexLayout.jsx';

import { Applications } from '/imports/collections/applications.js';

const composer = (props, onData) => {

  const subscription = Meteor.subscribe('admin.index');

  // Check if subscription is ready
  if (subscription.ready()) {

    const user = !!Meteor.user() ? Meteor.user() : null;

    // Wait for user subscription (kinda)
    if (user) {

      // And check roles
      if (Roles.userIsInRole(user._id, [ 'superadmin' ])) {

        // Look for user's application
        let applications = Applications.find({});

        onData(null, { applications });

      } else {
        // >>>> How to alert the user to lack of permission
        console.log('Permission clash needs resolution');
        onData(null, { user: null });
      }

    } else {
      // We return an empty user to make applyLayout show the login form
      onData(null, { user: null });
    }

  }
};

export const AdminContainer = composeWithTracker(composer)(AdminIndexLayout);