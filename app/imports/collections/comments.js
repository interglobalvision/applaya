import { Meteor } from 'meteor/meteor';

class CommentsCollection extends Mongo.Collection {
  insert(doc, callback) {
    doc.createdAt = doc.createdAt || new Date();
    doc.userId = Meteor.userId();
    doc.year = doc.year || new Date().getFullYear();

    return super.insert(doc,callback);
  }
}

export const Comments = new CommentsCollection('Comments');

Comments.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
