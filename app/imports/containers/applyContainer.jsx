import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { ApplyLayout } from '/imports/components/apply/applyLayout.jsx';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

import { createApplication } from '/imports/api/methods/applicationMethods.js';

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

      // And check roles
      if (Roles.userIsInRole(user._id, [ 'applicant' ])) {

        // Look for user's application
        let application = Applications.findOne({ userId: user._id });

        if (!!application) {

          // Route according to status
          if (application.status.submitted === true) {
            return FlowRouter.go('/apply/pay');
          }

          // Get section URL (props come from the router)
          const currentSection = props.section;

          // If section is not in the URL, route to  latest position in the application if set
          if (currentSection === undefined && application.position !== undefined && props.intro === false) {
            return FlowRouter.go('/apply/section/' + application.position);
          }

          // Check if props section is set
          if (currentSection !== undefined) {

            // If section is not in the URL, get the latest position in the application
            // I changed these conditions. In ES6 you can check for undefined as expected.
            // Fallback for <IE8 is done by Babel if configured.
            if (currentSection === undefined && application.position !== undefined) {
              return FlowRouter.go('/apply/section/' + application.position);
            } else if (currentSection === undefined) {
              // Otherwise go to /apply/1
              return FlowRouter.go('/apply/section/1');
            }

            let section = {
              applicationId: application._id,
              step: currentSection,
            };

            let sectionData = ApplicationSections.findOne({
              applicationId: application._id,
              step: currentSection,
            });

            let validated = _.isUndefined(sectionData) || _.isUndefined(sectionData.validated) ? false : sectionData.validated;

            // Merge data
            section = Object.assign(section, sectionData);

            onData(null, { user, section, application, validated });

          } else {

            let showIntro = true;

            onData(null, { user, application, showIntro });

          }

        } else {
          // If no application returned proceed to create a new application for the user
          createApplication.call({}, (err) => {
            if (err) {
              onData(new Meteor.Error(err));
            }
          });
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

export const ApplyContainer = composeWithTracker(composer)(ApplyLayout);
