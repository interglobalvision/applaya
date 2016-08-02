import { Future } from 'future';
import { ApplicationPaymentSchema } from '/imports/schemas/applicationPayment.js';

// It runs run() only if validate: true.
export const makePayment = new ValidatedMethod({
  name: 'pay.application',

  // This doesn't receive any arguments, so we don't need validation
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
      type: ApplicationPaymentSchema,
    },
  }).validator(),

  run(data) {

    if (!this.userId) {
      throw new Meteor.Error('Payment.methods.pay-application.not-logged-in', 'Must be logged in to pay application.');
    }

    //Conekta.locale = Meteor.user().profile.lang;

    Conekta.api_key = Meteor.settings.conekta_private;

    data.email = Meteor.user().emails[0].address;

    debugger;
    let conektaSync = (data) => {
      let future = new Future();

      debugger;
      Conekta.Charge.create({
        "amount": data.amount,
        "currency": "USD",
        "description": "Material Art Fair",
        //"reference_id": data.applicationId,
        "card": data.token,
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
          "phone": data.tel,
          "billing_address": {
            "street1": data.address1,
            "street2": data.address2,
            "city": data.city,
            "state": data.state,
            "zip": data.postalCode,
            "country": data.country,
          },
        },
      },
        charge => future.return(charge),
        error => future.return(error),
      );

      return future.wait();
    };

    let chargeResult = conektaSync(data);
    debugger;

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
