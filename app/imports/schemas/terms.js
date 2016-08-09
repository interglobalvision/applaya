import { SignatureField } from '/imports/components/fields/signatureField.jsx';

import i18n from 'meteor/universe:i18n';

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
