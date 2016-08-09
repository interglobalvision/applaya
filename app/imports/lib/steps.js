import React from 'react';

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

const T = i18n.createComponent();

export const Steps = [{
  component: GalleryInformation,
  name: <T>apply.sections.galleryInformation.stepName</T>,
  key: 'gallery-information',
  schema: GalleryInformationSchema,
}, {
  component: Booth,
  name: <T>apply.sections.booth.stepName</T>,
  key: 'booth',
  schema: BoothSchema,
}, {
  component: ContactInformation,
  name: <T>apply.sections.contactInformation.stepName</T>,
  key: 'contact-information',
  schema: ContactInformationSchema,
}, {
  component: Proposal,
  name: <T>apply.sections.proposal.stepName</T>,
  key: 'proposal',
  schema: ProposalSchema,
}, {
  component: Artists,
  name: <T>apply.sections.artists.stepName</T>,
  key: 'artists',
  schema: ArtistsSchema,
}, {
  component: Terms,
  name: <T>apply.sections.terms.stepName</T>,
  key: 'terms-and-conditions',
  schema: TermsSchema,
}];

// Exports a variable with the steps without the components
export const StepsInfo = _.map(Steps, function(step) {
  return _.omit(step, 'component');
});
