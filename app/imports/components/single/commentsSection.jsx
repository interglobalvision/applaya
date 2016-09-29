import React, { Component } from 'react';

import { AutoForm, ErrorsField, LongTextField, SubmitField } from 'uniforms-unstyled';

import { CommentSchema } from '/imports/schemas/comment.js';

import { submitComment, deleteComment } from '/imports/api/methods/commentsMethods.js';

import { autoParagraph } from '/imports/lib/misc.js';

export class CommentsSection extends Component {
  render() {
    return (
      <section id="comments-section">
        <h3>Comments</h3>
        <Comments comments={this.props.comments} />
        <AddComment applicationId={this.props.applicationId} />
      </section>
    );
  }
};

export class AddComment extends Component {
  onSubmit(data) {
    let _this = this;
    submitComment.call({
      applicationId:  this.props.applicationId,
      comment: data.content,
    }, (err) => {
      if (err) {
        return new Meteor.Error(err);
      } else {
        _this.refs.commentField.reset();
      }
    });
  }

  render() {

    return (
      <AutoForm schema={CommentSchema} className='add-comment' onSubmit={this.onSubmit.bind(this)} ref='commentField'>
        <LongTextField name="content" label={false} />
        <ErrorsField />
        <SubmitField />
      </AutoForm>
    );
  }
};

export class Comments extends Component {
  render() {
    return (
      <ul>
        {this.props.comments.map( (comment, key) => (
          <Comment comment={comment} />
        ))}
      </ul>
    );
  }
}

export class Comment extends Component {
  deleteComment() {
    if (confirm('Are you sure you want to delete this comment?')) {
      deleteComment.call(this.props.comment._id, err => {
        if (err) {
          return new Meteor.Error(err);
        }
      });
    }
  }

  render() {
    let comment = this.props.comment;
    return (
      <li className='comment-item'>
        <p><b>{comment.email}</b>: <span class="comment-date">{moment(comment.createdAt, 'DD-MM-YYYY HH:mm').format('DD/MM/YYYY, h:mm a')}</span> { Meteor.userId() === comment.userId ? <button className='list-item-remove' onClick={this.deleteComment.bind(this)}>&times;</button> : '' }</p>
        <div dangerouslySetInnerHTML={autoParagraph(comment.content)} />
      </li>
    );
  }
}
