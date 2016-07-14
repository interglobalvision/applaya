import { Meteor } from 'meteor/meteor';

import '/imports/startup/server/publications.js';
import '/imports/startup/slingshot.js';

import '/imports/api/methods.js';

Meteor.startup(() => {
  // code to run on server at startup
});
