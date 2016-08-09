import React from 'react';

const T = i18n.createComponent();
const schemaLocaleBase = 'apply.sections.contactInformation.';

export const ContactInformationSchema = new SimpleSchema({
  // Primary Contact
  contactName: {
    type: String,
    label: () => <T>{schemaLocaleBase + 'contactName.label'}</T>,
  },
  contactEmail: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: () => <T>{schemaLocaleBase + 'contactEmail.label'}</T>,
  },
  contactPhone: {
    type: String,
    label: () => <T>{schemaLocaleBase + 'contactPhone.label'}</T>,
  },
});
