import { Meteor } from 'meteor/meteor';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

import { Ratings } from '/imports/collections/ratings.js';
import { Comments } from '/imports/collections/comments.js';

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
        return Comments.find({
          applicationId: application._id,
        });
      },
    }, {
      find(application) {
        if (Roles.userIsInRole(this.userId, ['committee', 'admin'])) {
          return Ratings.find({
            applicationId: application._id,
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

Meteor.publishComposite('applications.index', function(posts, page, status, sortBy, search) {

  if (!page) {
    page = 0;
  } else {
    page = page - 1;
  }

  let skip = posts * page;

  let query = {};

  let projection = {
    limit: posts,
    skip,
  };


  // Lock Committee members to Paid Applications
  if (Roles.userIsInRole(this.userId, 'committee')) {
    status = 'paid';
  }

  if (status) {

    switch (status) {
      case 'in-process':
        query['status.complete'] = false;
        break;
      case 'complete':
        query['status.complete'] = true;
        query['status.submitted'] = false;
        break;
      case 'submitted':
        query['status.submitted'] = true;
        query['status.paid'] = false;
        break;
      case 'paid':
        query['status.paid'] = true;
        query['status.approved'] = false;
        break;
      case 'approved':
        query['status.approved'] = true;
        break;
    }
  }

  if (search) {
    query['$text'] = {
      $search: search,
    };
  }



  if (sortBy) {
    switch (sortBy) {
      case 'rating-asc':
        projection['sort'] = { averageRating: 1 };
        break;
      case 'rating-desc':
        projection['sort'] = { averageRating: -1 };
        break;
      case 'gallery-asc':
        projection['sort'] = { galleryName: 1 };
        break;
      case 'gallery-desc':
        projection['sort'] = { galleryName: -1 };
        break;
    }
  }

  return {

    // This function
    find() {
      return Applications.find(query, projection);
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

// Ratings

/*
 * Used in applciations index, return all ratings by this user in the given applications
 *
 * applicationsIds (array): list of applications ids
 */

Meteor.publish('ratings.applications', function(applicationsIds) {

  return Ratings.find({
    applicationId: {
      $in: applicationsIds
    },
    userId: this.userId,
  });

});
