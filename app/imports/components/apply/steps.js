// Import apply parts
import { TextTest } from '/imports/components/apply/textTest.jsx';
import { FormTest } from '/imports/components/apply/formTest.jsx';
import { GalleryInformation } from '/imports/components/apply/galleryInformation.jsx';
import { ContactInformation } from '/imports/components/apply/contactInformation.jsx';
import { Proposal } from '/imports/components/apply/proposal.jsx';
import { Artists } from '/imports/components/apply/artists.jsx';
import { Booth } from '/imports/components/apply/booth.jsx';

// Import schemas
import { FormSchema } from '/imports/schemas/testForm.js';
import { GalleryInformationSchema } from '/imports/schemas/galleryInformation.js';
import { ContactInformationSchema } from '/imports/schemas/contactInformation.js';
import { ProposalSchema } from '/imports/schemas/proposal.js';
import { ArtistsSchema } from '/imports/schemas/artists.js';
import { BoothSchema } from '/imports/schemas/booth.js';

export const Steps = [{ // 1
  component: FormTest,
  name: 'First Form',
  key: 'form-test',
  schema: FormSchema,
}, { // 2
  component: TextTest,
  name: 'Text page example',
  key: 'text-test',
}, { // 3
  component: GalleryInformation,
  name: 'Gallery Information',
  key: 'gallery-information',
  schema: GalleryInformationSchema,
}, { // 4
  component: ContactInformation,
  name: 'Contact Information',
  key: 'contact-information',
  schema: ContactInformationSchema,
}, { // 5
  component: Proposal,
  name: 'Proposal',
  key: 'proposal',
  schema: ProposalSchema,
}, { // 6
  component: Artists,
  name: 'Artists',
  key: 'artists',
  schema: ArtistsSchema,
}, { // 7
  component: Booth,
  name: 'Booth',
  key: 'booth',
  schema: BoothSchema,
}];

// Exports a variable with the steps without the components
export const StepsInfo = _.map(Steps, function(step) {
  return _.omit(step, 'component');
});
