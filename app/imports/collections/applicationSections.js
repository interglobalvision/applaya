import { Meteor } from 'meteor/meteor';

// This extends the Mongo.Collection in order to define
// some values on insert
class ApplicationSectionsCollection extends Mongo.Collection {
  insert(doc, callback) {
    doc.createdAt = doc.createdAt || new Date();
    doc.updatedAt = doc.updatedAt || new Date();
    doc.userId = Meteor.userId();
    doc.year = doc.year || new Date().getFullYear();

    // This call it's parent original method.
    return super.insert(doc,callback);
  }
}

// Export instance of our extended class
export const ApplicationSections = new ApplicationSectionsCollection('ApplicationSections');
