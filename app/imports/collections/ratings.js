import { Meteor } from 'meteor/meteor';

class RatingsCollection extends Mongo.Collection {
  insert(doc, callback) {
    doc.createdAt = doc.createdAt || new Date();
    doc.updatedAt = doc.updatedAt || new Date();
    doc.userId = Meteor.userId();
    doc.year = doc.year || new Date().getFullYear();

    return super.insert(doc,callback);
  }
}

export const Ratings = new RatingsCollection('Ratings');

Ratings.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
