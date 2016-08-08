import { UploadField, UploadFieldImage } from '/imports/components/fields/UploadField.jsx';

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

export const UploadImage = new SimpleSchema({
  file: {
    type: Object,
    blackbox: true,
    uniforms: {
      component: UploadFieldImage,
    },
    optional: true,
  },
});

