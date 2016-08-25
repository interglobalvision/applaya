import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { AdminIndexLayout } from '/imports/components/admin/adminIndexLayout.jsx';

import { Applications } from '/imports/collections/applications.js';

const composer = (props, onData) => {

  const latestApplicationsSub = Meteor.subscribe('admin.applications.latest');
  const applicationsCountSub = Meteor.subscribe('admin.applications.counts');
  const committeeSubscription = Meteor.subscribe('admin.users.committee');
  const adminSubscription = Meteor.subscribe('admin.users.admin');

  // Check if subscription is ready
  if (applicationsCountSub.ready() && latestApplicationsSub.ready() && committeeSubscription.ready() && adminSubscription.ready()) {

    const user = !!Meteor.user() ? Meteor.user() : null;

    // Wait for user subscription (kinda)
    if (user) {

      // And check roles
      if (Roles.userIsInRole(user._id, [ 'admin' ])) {

        let admins = Roles.getUsersInRole('admin');
        let committee = Roles.getUsersInRole('committee');

        let applications = Applications.find({}).fetch();

        let latestApplications = Applications.find({}, {
          // >>> why does this sort not seem to work?
          sort: {
            createdAt: -1,
          },
          limit: 10,
        }).fetch();

        let latestApplicationsWithUsers = _.map(latestApplications, (application) => {
          let applicationUser = Meteor.users.findOne(application.userId);

          if (applicationUser) {
            application.userEmail = applicationUser.emails[0].address;
          }

          return application;
        });

        onData(null, { user, applications, latestApplicationsWithUsers, admins, committee });

      } else {
        FlowRouter.go('/unauthorized');
      }

    } else {
      onData(null, { user: null });
    }

  }
};

export const AdminContainer = composeWithTracker(composer)(AdminIndexLayout);
