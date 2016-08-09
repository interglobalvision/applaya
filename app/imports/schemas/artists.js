import React from 'react';
import { Upload, UploadImage } from '/imports/schemas/Upload.js';

import ListField from '/imports/components/fields/list/ListField.jsx';

const T = i18n.createComponent();
const schemaLocaleBase = 'apply.sections.artists.';

export const ArtistsSchema = new SimpleSchema({
  // Artists
  artists: {
    type: [ Object ],
    minCount: 1,
    maxCount: 15,
    label: () => <T>{schemaLocaleBase + 'label'}</T>,
    uniforms: {
      component: ListField,
    },
  },
  'artists.$.name': {
    type: String,
    label: () => <T>{schemaLocaleBase + 'name.label'}</T>,
  },
  'artists.$.cv': {
    type: Upload,
    // This makes the field 'required'
    autoValue() {
      if (_.isEmpty(this.value) || _.isEmpty(this.value.file)) {
        this.unset();
      }
    },
    label: () => <T>{schemaLocaleBase + 'cv.label'}</T>,
  },
  'artists.$.work': {
    type: [ Object ],
    minCount: 1,
    maxCount: 5,
    label: () => <T>{schemaLocaleBase + 'work.label'}</T>,
    uniforms: {
      component: ListField,
    },
  },
  'artists.$.work.$.image': {
    type: UploadImage,
    // This makes the field 'required'
    autoValue() {
      if (_.isEmpty(this.value) || _.isEmpty(this.value.file)) {
        this.unset();
      }
    },
    label: () => <T>{schemaLocaleBase + 'work.image.label'}</T>,
  },
  'artists.$.work.$.workTitle': {
    type: String,
    label: () => <T>{schemaLocaleBase + 'work.workTitle.label'}</T>,
  },
  'artists.$.work.$.medium': {
    type: String,
    label: () => <T>{schemaLocaleBase + 'work.medium.label'}</T>,
  },
  'artists.$.work.$.dimensions': {
    type: String,
    label: () => <T>{schemaLocaleBase + 'work.dimensions.label'}</T>,
  },
  'artists.$.work.$.year': {
    type: String,
    label: () => <T>{schemaLocaleBase + 'work.year.label'}</T>,
  },
});
