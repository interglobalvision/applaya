import { Upload } from '/imports/schemas/Upload.js';

const Schema = new SimpleSchema({
  name: {
    type: String,
  },

  idCard: {
    type: Upload,
    // This makes the field 'required'
    autoValue() {
      if (_.isEmpty(this.value.file)) {
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
      return _.filter(this.value, function(val) {
        return !_.isEmpty(val.file);
      });
    },
    minCount: 1,
    maxCount: 2,
  },
  
});

export const FormSchema = Schema;
