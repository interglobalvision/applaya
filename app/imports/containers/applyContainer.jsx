import { composeWithTracker } from 'react-komposer';

import ApplyLayout from '/imports/components/apply/applyLayout.jsx';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

import { createApplication } from '/imports/api/methods.js';

const composer = ( props, onData ) => {

  const subscription = Meteor.subscribe( 'application.single' );

  // Check if subscription is ready
  if ( subscription.ready() ) {

    // Set some data 
    const user = !!Meteor.user() ? Meteor.user() : null;

    // Get section URL (props come from the router)
    const currentSection = props.section; // TODO: Or get last visited section

    let section = {
      type: currentSection,
      data: {}, 
    };

    let application = {};
    
    // Wait for user subscription (kinda)
    if( user ) {

      // Look for user's application
      application = Applications.findOne({ userId: user._id });

      // If no application returned proceed to create a new application for the user
      if ( application == null ) {
        createApplication.call({
          userId: user._id,
        }, (err,res) => {
          if (err) {
            alert(err);
          }

          application = Applications.findOne({ userId: user._id });

        });
      }

      // Get section data
      let sectionData = ApplicationSections.findOne({
        applicationId: application._id,
        type: currentSection,
      });

      // Set section
      if( !!sectionData ) {
        section = sectionData;
      }

    }

    onData( null, { user, section, application } );
  }
};

export default composeWithTracker(composer)(ApplyLayout);
