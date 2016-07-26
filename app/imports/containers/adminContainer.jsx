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

        let applications = Applications.find({}).fetch();

        let applicationsWithUsers = _.map(applications, (application) => {
          let applicationUser = Meteor.users.findOne(application.userId);

          if (applicationUser) {
            application.userEmail = applicationUser.emails[0].address;
          }

          return application;
        });

        onData(null, { applicationsWithUsers });

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