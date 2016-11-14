import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { ApplicationsLayout } from '/imports/components/applications/applicationsLayout.jsx';

import { Applications } from '/imports/collections/applications.js';
import { Ratings } from '/imports/collections/ratings.js';

const composer = (props, onData) => {

  let posts = 20;
  let page = props.queryParams.page || 1;
  let status = props.queryParams.status || null;
  let search = props.queryParams.search || null;
  let sortBy = props.queryParams.sortBy || null;

  const applicationsSub = Meteor.subscribe('applications.index', posts, page, status, sortBy, search);

  // Check if subscription is ready
  if (applicationsSub.ready()) {

    const user = !!Meteor.user() ? Meteor.user() : null;

    // Wait for user subscription (kinda)
    if (user) {

      // And check roles
      if (Roles.userIsInRole(user._id, [ 'admin', 'committee' ])) {

        let applications = Applications.find({}).fetch();

        let isAdmin = Roles.userIsInRole(user._id, 'admin') || false;

        // If user is commitee
        if (!isAdmin) {

          // Get all applications IDs
          const applicationsIds = _.map(applications, application => application._id);

          // Subscribe to ratings, pass applications IDs
          const ratingsSub = Meteor.subscribe('ratings.applications', applicationsIds); 

          // When ratings are ready
          if (applicationsSub.ready()) {

            // Add each user rating to it's application
            _.each(applications, (application, index) => {

              // Find this application rating
              let rating = Ratings.findOne({
                applicationId: application._id,
              });


              // If value add it else add 0
              if (rating) {
                applications[index].userRating = rating.value;
              } else {
                applications[index].userRating = 0;
              }

            });

            onData(null, { user, applications, page, isAdmin });
          }
        } else {
          onData(null, { user, applications, page, isAdmin });
        }

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
