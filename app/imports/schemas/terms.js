import React from 'react';
import { SignatureField } from '/imports/components/fields/signatureField.jsx';

const T = i18n.createComponent();
const schemaLocaleBase = 'apply.sections.terms.';

const SectionSchema = new SimpleSchema({
  name: {
    type: String,
    label: () => <T>{schemaLocaleBase + 'name.label'}</T>,
  },
  date: {
    type: String,
    label: () => <T>{schemaLocaleBase + 'date.label'}</T>,
  },
  signature: {
    type: String,
    uniforms: {
      component: SignatureField,
    },
    label: () => <T>{schemaLocaleBase + 'signature.label'}</T>,
  },
});

export const TermsSchema = SectionSchema;
