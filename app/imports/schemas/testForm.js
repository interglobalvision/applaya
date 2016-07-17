/* globals _ */
import { Upload } from '/imports/schemas/Upload.js';

const Schema = new SimpleSchema({
  name: {
    type: String,
  },

  lastname: {
    type: String,
    min: 3,
    max: 10,
  },

  alias: {
    type: String,
    optional: true,
  },

  category: {
    type: String,
    allowedValues: [
      'news',
      'image',
      'video',
    ],
  },

  idCard: {
    type: Upload,
    // This makes the field 'required'
    autoValue() {
      if (_.isEmpty(this.value) || _.isEmpty(this.value.file)) {
        this.unset();
      }
    },
  },

  cv: {
    type: Upload,
  },

  photos: {
    type: [ Upload ],
    maxCount: 2,
  },
  
  docs: {
    type: [ Upload ],
    // This makes minCount work
    autoValue() {
      return _.filter(this.value, (val) => !_.isEmpty(val.file));
    },
    minCount: 1,
    maxCount: 2,
  },
  
});

export const FormSchema = Schema;
