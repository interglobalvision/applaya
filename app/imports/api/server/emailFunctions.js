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
  let content = 'Your application fee payment to Material Art Fair for $' + Meteor.settings.public.applicationFee + ' USD has been completed from your ' + cardBrand + ' ending in ' + cardLastFour + '.\r\n\r\nThank you very much and if you have any further questions, please write to applications@material-fair.com.\r\n\r\nMaterial Art Fair';

  sendMail(user.emails[0].address, 'MAF Payment Recieved', content);

};