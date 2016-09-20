import { Meteor } from 'meteor/meteor'

import { Applications } from '/imports/collections/applications.js';
import { Ratings } from '/imports/collections/ratings.js';

export const saveRating = new ValidatedMethod({
  name: 'rating.save',

  validate: new SimpleSchema({
    applicationId: {
      type: String,
    },
    rating: {
      type: Number,
    },
  }).validator(),

  run({applicationId, rating}) {
    if (!Roles.userIsInRole(this.userId, 'committee')) {
      throw new Meteor.Error('Rating.methods.set.not-allowed', 'Must be committee to do this.');
    }

    if (rating === 0) {
      Ratings.remove({
        applicationId: applicationId,
        userId: this.userId,
      }, (err) => {
        if (!err) {
          // Get avg rating and save it in the application, like saveApplyProgress.call(applicationId);
          saveAverageRating.call(applicationId);
        }
      });
    } else {
      Ratings.update({
        applicationId: applicationId,
        userId: this.userId,
      }, {
        userId: this.userId,
        applicationId: applicationId,
        value: rating,
      }, { upsert: true }, (err) => {
        if (!err) {
          // Get avg rating and save it in the application, like saveApplyProgress.call(applicationId);
          saveAverageRating.call(applicationId);
        }
      });
    }
  },
});

const saveAverageRating = new ValidatedMethod({
  name: 'rating.save-average',

  validate(applicationId) {
    check(applicationId, String);
  },

  run(applicationId) {
    if (!Roles.userIsInRole(this.userId, ['admin', 'committee'])) {
      throw new Meteor.Error('Rating.methods.set-average.not-allowed', 'Must be admin/committee to do this.');
    }

    // Get ratings
    let ratings = Ratings.find({ applicationId }, {
      fields: {
        value: true,
      }
    }).fetch();

    let average = 0;

    if( ratings.length ) {
      // Reduce ratings
      let total = ratings.reduce( (total,rating) => {
        return total + rating.value;
      }, 0);

      average = total/ratings.length;

    } 

    // Save new avg rating
    Applications.update(applicationId, { $set: { averageRating: average } });

  },
});
