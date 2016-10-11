// Import collections
import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

// Import Steps
import { StepsInfo } from '/imports/lib/steps.js';

// This is a validated method. From the meteor pckg validated-method
// https://github.com/meteor/validated-method
//
// It runs run() only if validate: true.
export const createApplication = new ValidatedMethod({
  name: 'application.create',

  // This doesn't receive any arguments, so we don't need validation
  validate: new SimpleSchema({
    userEmail:  { type: SimpleSchema.RegEx.WeakEmail, },
  }).validator(),

  run({ userEmail }) {

    if (!this.userId) {
      throw new Meteor.Error('Applications.methods.insert.not-logged-in', 'Must be logged in to create an application.');
    }

    Applications.insert({
      userId: this.userId,
      userEmail,
    });

  },
});


// This method could be named better and maybe live
// in a separate file.
export const submitApplicationSection = new ValidatedMethod({
  name: 'application.section.submit',

  validate({ step, data, applicationId }) {

    return new SimpleSchema({
      step: {
        type: Number,
      },
      applicationId: {
        type: String,
      },
      data: {
        type: Object,
        optional: true,
        blackbox: true,
      },
    }).validate({
      step,
      applicationId,
      data,
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

    // -- Validate data against section schema

    // Steps is an array, so positions start at 0.
    // But the step numbers for the routs start at 1. So we
    // substract the offset to the step param received.
    step--;

    const validationSchema = StepsInfo[step].schema;

    const validationContext = validationSchema.newContext();

    let validated = false;

    // Clean data before validation
    data = validationSchema.clean(data);

    if (validationContext.validate(data)) {
      validated = true;
    }

    const update = {
      $set: {
        applicationId,
        data,
        validated,
      },
    };

    ApplicationSections.update(query, update, { upsert: true }, (err) => {
      if (!err) {
        saveApplyProgress.call(applicationId);
      }
    });
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

export const saveApplyProgress = new ValidatedMethod({
  name: 'application.progress.save',

  validate(applicationId) {
    check(applicationId, String);
  },

  run(applicationId) {
    if (!this.userId) {
      throw new Meteor.Error('Applications.methods.save-position.not-logged-in', 'Must be logged in to save position');
    }

    const validatedSteps = ApplicationSections.find({
      applicationId: applicationId,
      validated: true,
    }).count();

    let data = {
      progress: validatedSteps,
    }

    if (validatedSteps === StepsInfo.length) {
      data['status.complete'] = true;
    } else {
      data['status.complete'] = false;
    }

    Applications.update(applicationId, {
      $set: data,
    });

  },
});

export const submitApplication = new ValidatedMethod({
  name: 'application.progress.submit',

  validate(applicationId) {
    check(applicationId, String);
  },

  run(applicationId) {
    if (!this.userId) {
      throw new Meteor.Error('Applications.methods.save-position.not-logged-in', 'Must be logged in to save position');
    }

    let application = Applications.findOne(applicationId);

    if (Meteor.userId() !== application.userId) {
      throw new Meteor.Error('Applications.methods.submit.not-owned', 'Must own application to submit it');
    }

    Applications.update(application._id, {
      $set: {
        'status.submitted': true,
      },
    });

  },
});
