import { Meteor } from 'meteor/meteor';

import '/imports/startup/server/migrations.js';
import '/imports/startup/server/publications.js';
import '/imports/startup/server/accounts.js';
import '/imports/startup/server/i18n.js';
import '/imports/startup/slingshot.js';

import '/imports/api/methods/applicationMethods.js';
import '/imports/api/methods/accountMethods.js';
import '/imports/api/methods/paymentMethods.js';
import '/imports/api/methods/adminMethods.js';
import '/imports/api/methods/adminApplicationMethods.js';
import '/imports/api/methods/ratingMethods.js';
import '/imports/api/methods/commentsMethods.js';
