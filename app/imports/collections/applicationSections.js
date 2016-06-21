import { Meteor } from 'meteor/meteor';

// This extends the Mongo.Collection in order to define
// some values on insert
class ApplicationSectionsCollection extends Mongo.Collection {
  insert(doc, callback) {
    doc.createdAt = doc.createdAt || new Date();
    doc.updatedAt = doc.updatedAt || new Date();
    doc.userId = Meteor.userId();

    // This call it's parent original method.
    return super.insert(doc,callback);
  }

  update(selector, modifier, ...optionsAndCallback) {
    modifier.$set['updatedAt'] =  modifier.$set['updatedAt'] || new Date();
  
    return super.update(selector, modifier, ...optionsAndCallback);
  }
}

// Export instance of our extended class
export const ApplicationSections = new ApplicationSectionsCollection('ApplicationSections');
