import { Meteor } from 'meteor/meteor'

import { Applications } from '/imports/collections/applications.js';
import { Charges } from '/imports/collections/charges.js';

import { ApplicationPaymentSchema } from '/imports/schemas/applicationPayment.js';

if (Meteor.isServer) {
  import { paymentSuccessEmail } from '/imports/api/server/emailFunctions.js';
}

import Conekta from 'conekta';

// It runs run() only if validate: true.
export const makePayment = new ValidatedMethod({
  name: 'pay.application',

  validate: new SimpleSchema({
    locale: {
      type: String,
    },
    card: {
      type: String,
    },
    details: {
      type: new SimpleSchema([ApplicationPaymentSchema, {
        'card.device_fingerprint': {
          type: String,
        },
      }]),
    },
    applicationId: {
      type: String,
    },
  }).validator(),

  run(data) {

    if (!this.userId) {
      throw new Meteor.Error('Payment.methods.pay-application.not-logged-in', 'Must be logged in to pay application.');
    }

    if (Meteor.isServer) {

      if (process.env.NODE_ENV === 'production') {
        Conekta.api_key = Meteor.settings.conekta_private;
      } else if (process.env.NODE_ENV === 'development') {
        Conekta.api_key = Meteor.settings.conekta_private_sandbox;
      }

      const wrapContektaChargeCreate = Meteor.wrapAsync(Conekta.Charge.create, Conekta.Charge);

      const application = Applications.findOne(data.applicationId);

      if(application.status.paid) {
        throw new Meteor.Error('Payment.methods.pay-application.application-already-paid', i18n.__('notifications.payment.alreadyPaid'));
      }

      Conekta.locale = data.locale;

      let result;

      try {
        result = wrapContektaChargeCreate({
          "amount": Meteor.settings.public.applicationFee,
          "currency": "USD",
          "description": "Material Art Fair",
          //"reference_id": data.applicationId,
          "card": data.card,
          "details": {
            "name": data.details.card.name,
            "phone": data.details.phone,
            "email": data.details.email,
            "line_items": [{
              "name": "Material Art Fair application fee",
              "sku": "maf_fee_1",
              "unit_price": Meteor.settings.public.applicationFee,
              "description": "Art Fair Application",
              "quantity": 1,
              "type": "application",
            },],
            "billing_address": {
              "street1": data.details.street1,
              "street2": data.details.street2,
              "city": data.details.city,
              "state": data.details.state,
              "zip": data.details.zip,
              "country": data.details.country,
              "phone": data.phone
            },
          },
        });
      } catch(error) {
        throw new Meteor.Error('Payment.methods.pay-application.' + error.type, error.message, error);
      }

      let chargeData = result._json;

      Charges.insert({applicationId: application._id, chargeData: chargeData});

      Applications.update(application._id, {$set: {'status.submitted': true, 'status.paid': true,},});

      return paymentSuccessEmail(this.userId, chargeData.id, chargeData.payment_method.brand, chargeData.payment_method.last4);
    }

  },
});
