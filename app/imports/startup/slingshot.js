/* globals Slingshot Random */
import { Meteor } from 'meteor/meteor';

Slingshot.fileRestrictions('fileUpload', {
  allowedFileTypes: ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  maxSize: parseInt(Meteor.settings.public.maxUploadSize),
});

Slingshot.fileRestrictions('imageUpload', {
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
  maxSize: parseInt(Meteor.settings.public.maxUploadSize),
});

// Misc
function createFilename(filename) {
  var extension = filename.split('.').slice(0).pop();
  var sanitized = filename.replace(extension, '').replace(/\W+/g, '').toLowerCase() + '.' + extension;

  return Random.id(4) + '_' + sanitized;
}

// Server code
if (Meteor.isServer) {

  Slingshot.createDirective('fileUpload', Slingshot.S3Storage, {
    bucket: Meteor.settings.aws_bucket,

    acl: 'public-read',

    authorize() {
      if (!this.userId) {
        throw new Meteor.Error('not-signed-in', 'You must register a user first before uploading a file.');
      }

      return true;
    },

    key(file) {
      // Store file into an image directory for the user's username.
      return Meteor.settings.applicationSafeName + '/' + this.userId + '/file/' + createFilename(file.name);
    },

  });

  Slingshot.createDirective('imageUpload', Slingshot.S3Storage, {
    bucket: Meteor.settings.aws_bucket,

    acl: 'public-read',

    authorize() {
      if (!this.userId) {
        throw new Meteor.Error('not-signed-in', 'You must register a user first before uploading a file.');
      }

      return true;
    },

    key(file) {
      // Store file into an image directory for the user's username.
      return Meteor.settings.applicationSafeName + '/' + this.userId + '/image/' + createFilename(file.name);
    },

  });
}