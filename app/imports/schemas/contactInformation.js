export const ContactInformationSchema = new SimpleSchema({
  // Primary Contact
  contactName: {
    type: String,
  },
  contactEmail: {
    type: String,
  },
  contactPhone: {
    type: String,
  },

  // -- Social
  twitter: {
    type: String,
    optional: true,
  },
  facebook: {
    type: String,
    optional: true,
  },
  tumblr: {
    type: String,
    optional: true,
  },
  instagram: {
    type: String,
    optional: true,
  },
});
