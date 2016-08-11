// Import collections
import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';
import { Charges } from '/imports/collections/charges.js';

// Import Steps
import { StepsInfo } from '/imports/lib/steps.js';

// This is a validated method. From the meteor pckg validated-method
// https://github.com/meteor/validated-method
//
// It runs run() only if validate: true.
export const deleteApplication = new ValidatedMethod({
  name: 'application.admin.delete',

  validate({ applicationId, userId }) {

    return new SimpleSchema({
      applicationId: {
        type: String,
      },
      userId: {
        type: String,
      }
    }).validate({
      applicationId,
      userId,
    });
  },

  run({ applicationId, userId }) {
    if (!Roles.userIsInRole(this.userId, 'admin')) {
      throw new Meteor.Error('Admin.methods.delete.not-allowed', 'Must be admin to do this.');
    }

    ApplicationSections.remove({applicationId: applicationId});
    Charges.remove({applicationId: applicationId});
    Applications.remove(applicationId);
    Meteor.users.remove(userId);

    const message =  i18n.__('notifications.delete.success');

    return { message };

  },
});

export const unsubmitApplication = new ValidatedMethod({
  name: 'application.admin.unsubmit',

  validate(applicationId) {
    check(applicationId, String);
  },

  run(applicationId) {
    if (!Roles.userIsInRole(this.userId, 'admin')) {
      throw new Meteor.Error('Admin.methods.unsubmit.not-allowed', 'Must be admin to do this.');
    }

    let application = Applications.update(applicationId, {
      $set: {
        'status.submitted': false,
      },
    });

    if (application) {
      const message =  i18n.__('notifications.unsubmit.success');

      return { message };
    } 

    throw new Meteor.Error('Admin.methods.unsubmit.error', i18n.__('notifications.errorOccurred'));
  },
});

export const markPaidApplication = new ValidatedMethod({
  name: 'application.admin.mark-paid',

  validate(applicationId) {
    check(applicationId, String);
  },

  run(applicationId) {
    if (!Roles.userIsInRole(this.userId, 'admin')) {
      throw new Meteor.Error('Admin.methods.mark-paid.not-allowed', 'Must be admin to do this.');
    }

    let application = Applications.update(applicationId, {
      $set: {
        'status.paid': true,
      },
    });

    if (application) {
      const message =  i18n.__('notifications.markPaid.success');

      return { message };
    } 

    throw new Meteor.Error('Admin.methods.mark-paid.error', i18n.__('notifications.errorOccurred'));
  },
});
