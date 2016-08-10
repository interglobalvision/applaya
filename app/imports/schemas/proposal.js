import React from 'react';

import { TextField, LongTextField } from 'uniforms-unstyled';

const T = i18n.createComponent();
const schemaLocaleBase = 'apply.sections.proposal.';

export const ProposalSchema = new SimpleSchema({
  // Proposal
  galleryHistory: {
    type: String,
    max: 4000,
    uniforms: {
      component: LongTextField,
    },
    label: () => i18n.__(schemaLocaleBase + 'galleryHistory.label'),
  },
  artistsRepresented: {
    type: String,
    max: 4000,
    uniforms: {
      component: LongTextField,
    },
    label: () => i18n.__(schemaLocaleBase + 'artistsRepresented.label'),
  },
  galleryYear: {
    type: Number,
    uniforms: {
      component: TextField,
    },
    label: () => i18n.__(schemaLocaleBase + 'galleryYear.label'),
  },
  participation: {
    type: String,
    max: 4000,
    uniforms: {
      component: LongTextField,
    },
    label: () => i18n.__(schemaLocaleBase + 'participation.label'),
  },
  standProposal: {
    type: String,
    max: 4000,
    uniforms: {
      component: LongTextField,
    },
    label: () => i18n.__(schemaLocaleBase + 'standProposal.label'),
  },
});
