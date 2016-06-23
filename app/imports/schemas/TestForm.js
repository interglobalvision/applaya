import FieldUpload from '/imports/components/fields/FileUpload.jsx';

export const FormSchema = new SimpleSchema({
  name: {
    type: String,
  },

  category: {
    type: String,
    allowedValues: [
      'news',
      'image',
      'video',
    ],
  },

  publishedDate: {
    type: Date,
  },

  published: {
    type: Boolean,
    optional: true,
  },

  cv: {
    type: String,
    uniforms: FieldUpload,
    optional: true,
  }
});
