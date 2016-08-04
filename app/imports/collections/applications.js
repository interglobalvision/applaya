import { Meteor } from 'meteor/meteor';

class ApplicationsCollection extends Mongo.Collection {
  insert(doc, callback) {
    doc.createdAt = doc.createdAt || new Date();
    doc.updatedAt = doc.updatedAt || new Date();
    doc.userId = Meteor.userId();
    doc.year = doc.year || new Date().getFullYear();
    doc.status = {
      complete: false,
      extended: false,
      submitted: false,
      paid: false,
      approved: false,
    };

    return super.insert(doc, callback);
  }

  update(selector, modifier, ...optionsAndCallback) {
    modifier.$set['updatedAt'] = modifier.$set['updatedAt'] || new Date();

    return super.update(selector, modifier, ...optionsAndCallback);
  }
}

export const Applications = new ApplicationsCollection('Applications');
