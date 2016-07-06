export const FormSchema = new SimpleSchema({
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

  publishedDate: {
    type: Date,
  },

  published: {
    type: Boolean,
    optional: true,
  },
});
