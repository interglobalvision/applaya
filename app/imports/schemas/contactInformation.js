const schemaLocaleBase = 'apply.sections.contactInformation.';

export const ContactInformationSchema = new SimpleSchema({
  // Primary Contact
  contactName: {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'contactName.label'),
  },
  contactEmail: {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'contactEmail.label'),
  },
  contactPhone: {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'contactPhone.label'),
  },

  // -- Social
  twitter: {
    type: String,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'twitter.label'),
  },
  facebook: {
    type: String,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'facebook.label'),
  },
  tumblr: {
    type: String,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'tumblr.label'),
  },
  instagram: {
    type: String,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'instagram.label'),
  },
});
