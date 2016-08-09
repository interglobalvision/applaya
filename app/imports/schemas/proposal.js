import React from 'react';

import { TextField, LongTextField } from 'uniforms-unstyled';

const T = i18n.createComponent();
const schemaLocaleBase = 'apply.sections.proposal.';

export const ProposalSchema = new SimpleSchema({
  // Proposal
  galleryHistory: {
    type: String,
    max: 2000,
    uniforms: {
      component: LongTextField,
    },
    label: () => <T>{schemaLocaleBase + 'galleryHistory.label'}</T>,
  },
  artistsRepresented: {
    type: String,
    max: 2000,
    uniforms: {
      component: LongTextField,
    },
    label: () => <T>{schemaLocaleBase + 'artistsRepresented.label'}</T>,
  },
  galleryYear: {
    type: Number,
    uniforms: {
      component: TextField,
    },
    label: () => <T>{schemaLocaleBase + 'galleryYear.label'}</T>,
  },
  participation: {
    type: String,
    max: 2000,
    uniforms: {
      component: LongTextField,
    },
    label: () => <T>{schemaLocaleBase + 'participation.label'}</T>,
  },
  standProposal: {
    type: String,
    max: 2000,
    uniforms: {
      component: LongTextField,
    },
    label: () => <T>{schemaLocaleBase + 'standProposal.label'}</T>,
  },
});
