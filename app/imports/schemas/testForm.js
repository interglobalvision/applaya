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
});
