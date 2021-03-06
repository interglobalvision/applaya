import React from 'react';
import { Upload, UploadImage } from '/imports/schemas/Upload.js';

import ListField from '/imports/components/fields/list/ListField.jsx';

const schemaLocaleBase = 'apply.sections.artists.';

export const ArtistsSchema = new SimpleSchema({
  // Artists
  artists: {
    type: [ Object ],
    minCount: 1,
    maxCount: 15,
    label: () => i18n.__(schemaLocaleBase + 'label'),
    uniforms: {
      component: ListField,
    },
  },
  'artists.$.name': {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'name.label'),
  },
  'artists.$.cv': {
    type: Upload,
    // This makes the field 'required'
    autoValue() {
      if (_.isEmpty(this.value) || _.isEmpty(this.value.file)) {
        this.unset();
      }
    },
    label: () => i18n.__(schemaLocaleBase + 'cv.label'),
  },
  'artists.$.work': {
    type: [ Object ],
    minCount: 1,
    maxCount: 18,
    label: () => i18n.__(schemaLocaleBase + 'work.label'),
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
    label: () => i18n.__(schemaLocaleBase + 'work.image.label'),
  },
  'artists.$.work.$.workTitle': {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'work.workTitle.label'),
  },
  'artists.$.work.$.medium': {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'work.medium.label'),
  },
  'artists.$.work.$.dimensions': {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'work.dimensions.label'),
  },
  'artists.$.work.$.year': {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'work.year.label'),
  },
});
