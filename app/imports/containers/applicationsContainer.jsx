import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { ApplicationsLayout } from '/imports/components/applications/applicationsLayout.jsx';

import { Applications } from '/imports/collections/applications.js';

const composer = (props, onData) => {

  let posts = 10;
  let page = 1;

  if (props.page) {
    page = props.page;
  }

  const subscription = Meteor.subscribe('applications.index', posts, page);

  // Check if subscription is ready
  if (subscription.ready()) {

    const user = !!Meteor.user() ? Meteor.user() : null;

    // Wait for user subscription (kinda)
    if (user) {

      // And check roles
      if (Roles.userIsInRole(user._id, [ 'superadmin', 'committee' ])) {

        let applications = Applications.find({}).fetch();

        applications = _.map(applications, (application) => {
          let applicationUser = Meteor.users.findOne(application.userId);

          if (applicationUser) {
            application.userEmail = applicationUser.emails[0].address;
          }

          return application;
        });

        onData(null, { user, applications, page });

      } else {
        FlowRouter.go('/unauthorized');
      }

    } else {
      // We return an empty user to make applyLayout show the login form
      onData(null, { user: null });
    }

  }
};

export const ApplicationsContainer = composeWithTracker(composer)(ApplicationsLayout);