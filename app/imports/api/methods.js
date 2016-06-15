import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

import { FormSchema } from '/imports/schemas/TestForm.js';

export const createApplication = new ValidatedMethod({
  name: 'application.create',

  validate: new SimpleSchema({
    userId: { type: String }
  }).validator(),

  run({ userId }) {
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
    const userId = this.userId;
    const updatedAt = new Date();

    const query = {
      type,
      userId,
      applicationId,
    };

    const update = {
      $set: {
        applicationId,
        data,
        updatedAt,
      }
    };

    // TODO
    // increment progress

    ApplicationSections.update( query, update, { upsert: true });
  }

});
