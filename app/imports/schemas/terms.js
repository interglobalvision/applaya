import React from 'react';
import { SignatureField } from '/imports/components/fields/signatureField.jsx';

const T = i18n.createComponent();
const schemaLocaleBase = 'apply.sections.terms.';

const SectionSchema = new SimpleSchema({
  name: {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'name.label'),
  },
  date: {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'date.label'),
  },
  signature: {
    type: String,
    uniforms: {
      component: SignatureField,
    },
    label: () => i18n.__(schemaLocaleBase + 'signature.label'),
  },
});

export const TermsSchema = SectionSchema;
