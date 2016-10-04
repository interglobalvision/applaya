import { Meteor } from 'meteor/meteor'

import { Applications } from '/imports/collections/applications.js';
import { Comments } from '/imports/collections/comments.js';

import { AccountsCommon } from 'meteor/accounts-base';

export const submitComment = new ValidatedMethod({
  name: 'comment.submit',

  validate: new SimpleSchema({
    applicationId: {
      type: String,
    },
    comment: {
      type: String,
    },
  }).validator(),

  run({ applicationId, comment }) {
    if (!Roles.userIsInRole(this.userId, ['committee', 'admin'])) {
      throw new Meteor.Error('Coments.methods.submit.not-allowed', 'Must be committee to do this.');
    }

    let user = Meteor.users.findOne(this.userId);

    Comments.insert({
      userId: this.userId,
      email: user.emails[0].address,
      applicationId: applicationId,
      content: comment,
    });
  }
});

export const deleteComment = new ValidatedMethod({
  name: 'comment.delete',

  validate(commentId) {
    check(commentId, String);
  },

  run(commentId) {
    if (!Roles.userIsInRole(this.userId, ['committee', 'admin'])) {
      throw new Meteor.Error('Coments.methods.submit.not-allowed', 'Must be committee or admin to do this.');
    }

    if (Roles.userIsInRole(this.userId, ['admin'])) { // Admin can delete any comment

      Comments.remove({
        _id: commentId,
      });

    } else { // Committee can only delete owned comments

      if (Comments.findOne({ _id: commentId, userId: this.userId })  === undefined) {
        throw new Meteor.Error('Coments.methods.submit.not-owned', 'Must own this comment to do this.');
      }

      Comments.remove({
        _id: commentId,
        userId: this.userId
      });

    }
  } 
});
