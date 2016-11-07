import { Meteor } from 'meteor/meteor';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

Migrations.add({
  version: 1,
  name: 'Add userEmail to each application',
  up: function() {
    //code to migrate up to version 1
    Applications.find({}).forEach(application => { // Find ALL Applications
      const user = Meteor.users.findOne(application.userId);

      if (user) {
        const userEmail = user.emails[0].address;
        
        if (userEmail) {
          Applications.update(application._id, { $set: { userEmail } });
        }

      }

    });

  }, 
});

Migrations.add({
  version: 2,
  name: 'Add galleryName to each application',
  up: function() {
    Applications.find({}).forEach(application => { // Find ALL Applications and iterate

      // Get section 1 for the current application, which contain the gallery info
      const galleryInfo = ApplicationSections.findOne({
        applicationId: application._id,
        step: 1,
      });

      if (galleryInfo) {

        // Get the gallery name
        const galleryName = galleryInfo.data.galleryName;

        if(galleryName) {
        
          // Update current application with galleryName
          Applications.update(application._id, { $set: { galleryName } });
        }

      }

    });

  }, 
});


Meteor.startup(function() {
  Migrations.migrateTo('2');
});
