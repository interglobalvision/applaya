const schemaLocaleBase = 'apply.sections.contactInformation.';

export const ContactInformationSchema = new SimpleSchema({
  // Primary Contact
  contactName: {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'contactName.label'),
  },
  contactEmail: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: () => i18n.__(schemaLocaleBase + 'contactEmail.label'),
  },
  contactPhone: {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'contactPhone.label'),
  },
});
