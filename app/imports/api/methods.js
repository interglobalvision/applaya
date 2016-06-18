import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

import { FormSchema } from '/imports/schemas/TestForm.js';

// This is a validated method. From the meteor pckg validated-method 
// https://github.com/meteor/validated-method
//
// It runs run() only if validate: true.
export const createApplication = new ValidatedMethod({
  name: 'application.create',

  validate: new SimpleSchema({
    userId: { type: String }
  }).validator(),

  run({ userId }) {

    if( !this.userId ) {
      throw new Meteor.Error('Applications.methods.insert.not-logged-in', 'Must be logged in to create an application.');
    }

    if( this.userId != userId ) {
      throw new Meteor.Error('Applications.methods.insert.different-user', 'Who you trying to mess with, uh?');
    }

    Applications.insert({userId});
  }
});


// This method could be named better and maybe live 
// in a separate file.
export const saveApplicationSection = new ValidatedMethod({
  name: 'application.section.save',

  validate: new SimpleSchema({
    type: {
      type: String,
    },
    applicationId: {
      type: String
    },
    data: {
      type: FormSchema,
      optional: true,
    }
  }).validator(),

  run({ type, applicationId, data }) {

    if( !this.userId ) {
      throw new Meteor.Error('ApplicationSection.methods.saveSection.not-logged-in', 'Must be logged in to save a section.');
    }

    const userId = this.userId;

    const query = {
      type,
      userId,
      applicationId,
    };

    const update = {
      $set: {
        applicationId,
        data,
      }
    };

    // TODO
    // increment progress

    ApplicationSections.update( query, update, { upsert: true });
  }

});

export const saveApplyPosition = new ValidatedMethod({
  name: 'application.position',

  validate: new SimpleSchema({

    position: {
      type: String,
      optional: true,
    },

    applicationId: {
      type: String
    },

  }).validator(),

  run({ position, applicationId }) {
    if( !this.userId ) {
      throw new Meteor.Error('Applications.methods.save-position.not-logged-in', 'Must be logged in to save position');
    }

    if( !!position ) {

      const update = {
        $set: {
          position,
        }
      };

      Applications.update( applicationId, update );
    }
  }
});
