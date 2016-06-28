import UploadField from '/imports/components/fields/UploadField.jsx';

const UploadSchema = new SimpleSchema({
  file: {
    type: Object,
    uniforms: {
      component: UploadField,
    },
  },
});

UploadSchema.messages({
  'required file': 'Msg for required file',
});

export const FormSchema = new SimpleSchema({
  name: {
    type: String,
  },

  docs: {
    type: [Object],
    minCount: 2,
    maxCount: 2,
    label: 'Documents',
  },

  'docs.$': {
    label: 'File',
    type: Object,
    uniforms: {
      component: UploadField,
    },
  },

  'docs.$.url': {
    type: String,
    optional: true,
  },
  'docs.$.sizes': {
    type: Object,
    optional: true,
  },
  'docs.$.name': {
    type: String,
    optional: true,
  },

});

