import { Meteor } from 'meteor/meteor'
import { Email } from 'meteor/email'

// General emailer function
export const sendMail = (address, subject, content) => {

  let schema = new SimpleSchema({
    address: {
      type: String,
    },
    subject: {
      type: String,
    },
    content: {
      type: String,
    }
  });

  let obj = {
    address: address,
    subject: subject,
    content: content
  };

  check(obj, schema);

  Email.send({
    to: address,
    from: Meteor.settings.emailFrom,
    subject: subject,
    text: content,
  });

}

// Functions related to payments
export const paymentSuccessEmail = (userId, chargeId, cardBrand, cardLastFour) => {

  let schema = new SimpleSchema({
    userId: {
      type: String,
    },
    chargeId: {
      type: String,
    },
    cardBrand: {
      type: String,
    },
    cardLastFour: {
      type: String,
      min: 4,
      max: 4
    }
  });

  let obj = {
    userId: userId,
    chargeId: chargeId,
    cardBrand: cardBrand,
    cardLastFour: cardLastFour
  };

  check(obj, schema);

  let user = Meteor.users.findOne(userId);
  let content = 'Your payment ' + chargeId + ' to Material Art Fair has been completed from your ' + cardBrand + ' ending in ' + cardLastFour;

  sendMail(user.emails[0].address, 'MAF Payment Recieved', content);

};