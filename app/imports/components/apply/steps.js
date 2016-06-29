// Import apply parts
import { TextTest } from '/imports/components/apply/textTest.jsx';
import { FormTest } from '/imports/components/apply/formTest.jsx';
import { GalleryInformation } from '/imports/components/apply/galleryInformation.jsx';
import { ContactInformation } from '/imports/components/apply/contactInformation.jsx';

// Import schemas
import { FormSchema } from '/imports/schemas/testForm.js';
import { GalleryInformationSchema } from '/imports/schemas/galleryInformation.js';
import { ContactInformationSchema } from '/imports/schemas/contactInformation.js';

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
  schema: GalleryInformationSchema,
}, {
  component: ContactInformation,
  name: 'Contact Information',
  key: 'contact-information',
  schema: ContactInformationSchema,
}];

// Exports a variable with the steps without the components
export const StepsInfo = _.map(Steps, function(step) {
  return _.omit(step, 'component');
});
