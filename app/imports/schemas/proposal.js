import { LongTextField } from 'uniforms-unstyled';

const schemaLocaleBase = 'apply.sections.proposal.';

export const ProposalSchema = new SimpleSchema({
  // Proposal
  galleryHistory: {
    type: String,
    max: 2000,
    uniforms: {
      component: LongTextField,
    },
    label: () => i18n.__(schemaLocaleBase + 'galleryHistory.label'),
  },
  artistsRepresented: {
    type: String,
    max: 2000,
    uniforms: {
      component: LongTextField,
    },
    label: () => i18n.__(schemaLocaleBase + 'artistsRepresented.label'),
  },
  galleryYear: {
    type: Number,
    label: () => i18n.__(schemaLocaleBase + 'galleryYear.label'),
  },
  participation: {
    type: String,
    uniforms: {
      component: LongTextField,
    },
    label: () => i18n.__(schemaLocaleBase + 'participation.label'),
  },
  standProposal: {
    type: String,
    max: 2000,
    uniforms: {
      component: LongTextField,
    },
    label: () => i18n.__(schemaLocaleBase + 'standProposal.label'),
  },
});
