import UploadField from '/imports/components/fields/UploadField.jsx';

const Upload = new SimpleSchema({
  file: {
    type: Object,
    blackbox: true,
    uniforms: {
      component: UploadField,
    },
    custom() {
      if (_.isEmpty(this.value)) {
        return 'required';
      }
    },
    autoValue() {
      if (_.isEmpty(this.value)) {
        this.unset();
      }
    },
  },
});

const Schema = new SimpleSchema({
  name: {
    type: String,
  },

  cv: {
    type: Upload,
  },
  
  /*
  'cv.url': {
    type: String,
  },
  'cv.name': {
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
  */

});

export const FormSchema = Schema;
