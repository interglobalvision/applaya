import { Meteor } from 'meteor/meteor';

class ApplicationsCollection extends Mongo.Collection {
  insert(doc, callback) {
    doc.createdAt = doc.createdAt || new Date();
    doc.updatedAt = doc.updatedAt || new Date();
    doc.userId = Meteor.userId();
    doc.year = doc.year || new Date().getFullYear();

    return super.insert(doc,callback);
  }

  update(doc, callback) {
    doc.updatedAt = new Date();
  
    return super.insert(doc,callback);
  }
}
export const Applications = new ApplicationsCollection('Applications');
