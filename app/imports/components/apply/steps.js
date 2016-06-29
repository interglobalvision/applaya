// Import apply parts
import { TextTest } from '/imports/components/apply/text-test.jsx';
import { FormTest } from '/imports/components/apply/form-test.jsx';
import { GalleryInformation } from '/imports/components/apply/galleryInformation.jsx';

// Import schemas
import { FormSchema } from '/imports/schemas/TestForm.js';
import { GalleryInformationSchema } from '/imports/schemas/GalleryInformation.js';

export const Steps = [{ // 1
  component: FormTest,
  name: 'First Form',
  key: 'form-test',
  schema: FormSchema
}, { // 2
  component: TextTest,
  name: 'Text page example',
  key: 'text-test',
}, {
  component: GalleryInformation,
  name: 'Gallery Information',
  key: 'gallery-information',
  schema: GalleryInformationSchema
}];

export const StepsInfo = _.map(Steps, function(step) {
  return _.omit(step, 'component');
});
