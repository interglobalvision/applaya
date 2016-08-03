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
        userId,
      }, {
        fields: {
          createdAt: 0,
          updatedAt: 0,
        },
      });
    },

    children: [{
      find(application) {
        return Applications.find({
          _id: application._id,
        }, {
          fields: {
            createdAt: 0,
            updatedAt: 0,
          },
        });
      },
    }, {
      find(application) {
        return ApplicationSections.find({
          applicationId: application._id,
        }, {
          fields: {
            createdAt: 0,
            updatedAt: 0,
          },
        });
      },
    }],
  };

});

Meteor.publishComposite('admin.application.single', function(applicationId) {

  return {

    find() {
      return Applications.find(applicationId);
    },

    children: [{
      find(application) {
        return ApplicationSections.find({
          applicationId: application._id,
        });
      },
    }],
  };

});

Meteor.publishComposite('admin.applications', function() {
  return {

    find() {
      return Applications.find({});
    },

    children: [ {
      find(application) {
        return Meteor.users.find({
          _id: application.userId,
        });
      },
    } ],
  };

});

Meteor.publish('admin.users.committee', function() {

  if (Roles.userIsInRole(this.userId, 'admin')) {
    return Roles.getUsersInRole('committee');
  } else {
    this.stop();
    return
  }

});

Meteor.publish('admin.users.admin', function() {

  if (Roles.userIsInRole(this.userId, 'admin')) {
    return Roles.getUsersInRole('admin');
  } else {
    this.stop();
    return
  }

});
