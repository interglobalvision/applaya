import { Meteor } from 'meteor/meteor';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

// For publication we use the old function() {} syntax
Meteor.publishComposite('application.single', function() {
  const userId = this.userId;

  return {
    
    // This function
    find() {
      return Applications.find({
        userId: this.userId,
      });
    },

    children: [{
      find(application) {
        return Applications.find({
          _id: application._id
        }, {
          createdAt: 0,
          updatedAt: 0,
        });
      }
    },{
      find(application) {
        return ApplicationSections.find({
          applicationId: application._id
        }, {
          createdAt: 0,
          updatedAt: 0,
        });
      }
    }]
  }

});
