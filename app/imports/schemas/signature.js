import { SignatureField } from '/imports/components/fields/signatureField.jsx';

export const SignatureSchema = new SimpleSchema({
  signature: {
    type: String,
    uniforms: {
      component: SignatureField
    },
  }
});
