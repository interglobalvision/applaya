// Import collections
import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

// Import Steps
import { StepsInfo } from '/imports/components/apply/steps.js';

// This is a validated method. From the meteor pckg validated-method
// https://github.com/meteor/validated-method
//
// It runs run() only if validate: true.
export const createApplication = new ValidatedMethod({
  name: 'application.create',

  // This doesn't receive any arguments, so we don't need validation
  validate: null,

  run() {

    if (!this.userId) {
      throw new Meteor.Error('Applications.methods.insert.not-logged-in', 'Must be logged in to create an application.');
    }

    Applications.insert({
      userId: this.userId,
    });

  },
});


// This method could be named better and maybe live
// in a separate file.
export const saveApplicationSection = new ValidatedMethod({
  name: 'application.section.save',

  validate({ step, data, applicationId }) {
    
    // Steps is an array, so positions start at 0.
    // But the step numbers for the routs start at 1. So we
    // substract the offset to the step param received.
    step--;

    const validationSchema = StepsInfo[step].schema;

    return new SimpleSchema({
      step: {
        type: Number,
      },
      applicationId: {
        type: String,
      },
      data: {
        type: validationSchema,
        optional: true,
      },
    }).validate({
      step,
      applicationId,
      data
    }); 
  },

  run({ step, applicationId, data }) {

    if (!this.userId) {
      throw new Meteor.Error('ApplicationSection.methods.saveSection.not-logged-in', 'Must be logged in to save a section.');
    }

    const userId = this.userId;

    const query = {
      step,
      userId,
      applicationId,
    };

    const update = {
      $set: {
        applicationId,
        data,
      },
    };

    ApplicationSections.update(query, update, { upsert: true });
  },

});

export const saveApplyPosition = new ValidatedMethod({
  name: 'application.position',

  validate: new SimpleSchema({

    position: {
      type: Number,
      optional: true,
    },

    applicationId: {
      type: String,
    },

  }).validator(),

  run({ position, applicationId }) {
    if (!this.userId) {
      throw new Meteor.Error('Applications.methods.save-position.not-logged-in', 'Must be logged in to save position');
    }

    if (!!position) {

      const update = {
        $set: {
          position,
        },
      };

      Applications.update(applicationId, update);
    }
  },
});
