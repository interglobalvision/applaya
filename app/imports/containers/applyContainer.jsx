import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';

import { ApplyLayout } from '/imports/components/apply/applyLayout.jsx';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

import { createApplication } from '/imports/api/methods/applicationMethods.js';

const composer = (props, onData) => {
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
            
          // Check if time is after deadline
          if (moment() > moment(Meteor.settings.public.applicationDeadline, Meteor.settings.public.dateFormat) && application.status.extended === false) {
            return FlowRouter.go('/applications-closed');
          }

          // Check if time is after extended deadline
          if (moment() > moment(Meteor.settings.public.applicationExtension, Meteor.settings.public.dateFormat)) {
            return FlowRouter.go('/applications-closed');
          }

          // Get section URL (props come from the router)
          const currentSection = props.section;

          // If section is not in the URL
          if (currentSection === undefined && !props.intro) {

            // If is submitted got ot /applay/pay
            if (application.status.submitted === true) {
              return FlowRouter.go('/apply/pay');
            }

            // If position is saved got to that position
            if (application.position !== undefined) {
              return FlowRouter.go('/apply/section/' + application.position);
            } else {
              return FlowRouter.go('/apply/introduction');
            }
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



        } else { // If no application returned proceed to create a new application for the user
          var userEmail = user.emails[0].address;
          createApplication.call({ userEmail }, (err) => {
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
