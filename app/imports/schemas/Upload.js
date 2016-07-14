import { UploadField } from '/imports/components/fields/UploadField.jsx';

export const Upload = new SimpleSchema({
  file: {
    type: Object,
    blackbox: true,
    uniforms: {
      component: UploadField,
    },
    optional: true,
  },
});

