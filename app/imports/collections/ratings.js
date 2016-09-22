import { Meteor } from 'meteor/meteor';

class RatingsCollection extends Mongo.Collection {
  insert(doc, callback) {
    doc.createdAt = doc.createdAt || new Date();
    doc.updatedAt = doc.updatedAt || new Date();
    doc.userId = Meteor.userId();
    doc.year = doc.year || new Date().getFullYear();

    return super.insert(doc,callback);
  }

  update(selector, modifier, ...optionsAndCallback) {

    // When modifying whole document (ex. Mongol)
    if(_.isUndefined(modifier.$set)) {
      modifier['updatedAt'] = modifier['updatedAt'] || new Date();
    } else if (!_.isUndefined(modifier.$set)) {
    // When modifying whole document (ex. Mongol)
      modifier.$set['updatedAt'] = modifier.$set['updatedAt'] || new Date();
    }

    return super.update(selector, modifier, ...optionsAndCallback);
  }
}

export const Ratings = new RatingsCollection('Ratings');

Ratings.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
