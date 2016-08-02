import Promise from 'promise';
import { ApplicationPaymentSchema } from '/imports/schemas/applicationPayment.js';
import Conekta from 'conekta';

// It runs run() only if validate: true.
export const makePayment = new ValidatedMethod({
  name: 'pay.application',

  validate: new SimpleSchema({
    amount: {
      type: Number,
    },
    description: {
      type: String,
    },
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
  }).validator(),

  run(data) {

    if (!this.userId) {
      throw new Meteor.Error('Payment.methods.pay-application.not-logged-in', 'Must be logged in to pay application.');
    }

    //Conekta.locale = Meteor.user().profile.lang;

    Conekta.api_key = Meteor.settings.conekta_private;

    //data.email = Meteor.user().emails[0].address;

    debugger;
    let conektaSync = (data) => {

      return new Promise((resolve, reject) => {
        Conekta.Charge.create({
          "amount": data.amount,
          "currency": "USD",
          "description": "Material Art Fair",
          //"reference_id": data.applicationId,
          "card": data.card,
          "details": {
            //"email": data.email,
            "line_items": [{
              "name": "Material Art Fair application fee",
              "sku": "maf_fee_1",
              "unit_price": 12500,
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
              "phone": data.phone,
              "cellphone": data.cellphone,
            },
          },
        }, (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(charge);
            }
          }
        );

      });
    };

    let chargeResult = await conektaSync(data);

    console.log('New transaction: ', chargeResult);

    if (chargeResult.object === 'error') {
      throw new Meteor.Error('card-payment-failed', chargeResult.message_to_purchaser);
    }

    charge = chargeResult._json;
    debugger;

    //Meteor.call('paymentSuccessEmail', Meteor.userId(), charge.id, charge.payment_method.brand, charge.payment_method.last4);
    return true; //Applications.update(data.applicationId, {$set: {transactionId: charge.id, transaction: charge, status: 'paid',},});
  },
});
