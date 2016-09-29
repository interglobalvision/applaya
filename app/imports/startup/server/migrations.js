import { Meteor } from 'meteor/meteor';

import { Applications } from '/imports/collections/applications.js';

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

Meteor.startup(function() {
  Migrations.migrateTo('latest');
});
