// Import apply parts
import { GalleryInformation } from '/imports/components/apply/galleryInformation.jsx';
import { ContactInformation } from '/imports/components/apply/contactInformation.jsx';
import { Proposal } from '/imports/components/apply/proposal.jsx';
import { Artists } from '/imports/components/apply/artists.jsx';
import { Booth } from '/imports/components/apply/booth.jsx';
import { Terms } from '/imports/components/apply/terms.jsx';

// Import schemas
import { GalleryInformationSchema } from '/imports/schemas/galleryInformation.js';
import { ContactInformationSchema } from '/imports/schemas/contactInformation.js';
import { ProposalSchema } from '/imports/schemas/proposal.js';
import { ArtistsSchema } from '/imports/schemas/artists.js';
import { BoothSchema } from '/imports/schemas/booth.js';
import { TermsSchema } from '/imports/schemas/terms.js';

export const Steps = [{ // 1
  component: GalleryInformation,
  name: 'Gallery Information',
  key: 'gallery-information',
  schema: GalleryInformationSchema,
}, { // 2
  component: ContactInformation,
  name: 'Contact Information',
  key: 'contact-information',
  schema: ContactInformationSchema,
}, { // 3
  component: Proposal,
  name: 'Proposal',
  key: 'proposal',
  schema: ProposalSchema,
}, { // 4
  component: Artists,
  name: 'Artists',
  key: 'artists',
  schema: ArtistsSchema,
}, { // 5
  component: Booth,
  name: 'Booth',
  key: 'booth',
  schema: BoothSchema,
}, { // 6
  component: Terms,
  name: 'Terms and conditions',
  key: 'terms-and-conditions',
  schema: TermsSchema,
}];

// Exports a variable with the steps without the components
export const StepsInfo = _.map(Steps, function(step) {
  return _.omit(step, 'component');
});
