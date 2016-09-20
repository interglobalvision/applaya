import { Meteor } from 'meteor/meteor';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

import { Ratings } from '/imports/collections/ratings.js';

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
    }, {
      find(application) {
        if (Roles.userIsInRole(this.userId, 'committee')) {
          return Ratings.find({
            applicationId: application._id,
            userId: this.userId,
          });
        }
      },
    }, {
      find(application) {
        return Meteor.users.find({
          _id: application.userId,
        });
      },
    }],
  };

});

Meteor.publish('admin.applications.counts', function() {
  return Applications.find({}, {
    fields: {
      status: 1,
    },
  });
});

Meteor.publishComposite('admin.applications.latest', function() {
  return {

    find() {
      return Applications.find({}, {
        fields: {
          userId: 1,
          createdAt: 1,
        },
        sort: {
          createdAt: -1,
        },
        limit: 10,
      });
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

Meteor.publishComposite('applications.index', function(posts, page) {

  if (!page) {
    page = 0;
  } else {
    page = page - 1;
  }

  let skip = posts * page;

  return {

    // This function
    find() {
      return Applications.find({}, {limit: posts, skip: skip, sort: {createdAt: -1}});
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
    return;
  }

});

Meteor.publish('admin.users.admin', function() {

  if (Roles.userIsInRole(this.userId, 'admin')) {
    return Roles.getUsersInRole('admin');
  } else {
    this.stop();
    return;
  }

});
