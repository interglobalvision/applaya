import { SignatureField } from '/imports/components/fields/signatureField.jsx';

import i18n from 'meteor/universe:i18n';

const schemaLocaleBase = 'apply.sections.terms.';

const SectionSchema = new SimpleSchema({
  signature: {
    type: String,
    uniforms: {
      component: SignatureField,
    },
    label: () => i18n.__(schemaLocaleBase + 'signature.label'),
  },
});

export const TermsSchema = SectionSchema;
