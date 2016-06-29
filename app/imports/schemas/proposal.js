import { TextField, LongTextField } from 'uniforms-unstyled';

export const ProposalSchema = new SimpleSchema({
  // Proposal
  galleryHistory: {
    type: String,
    max: 2000,
    uniforms: {
      component: LongTextField,
    },
  },
  artistsRepresented: {
    type: String,
    max: 2000,
    uniforms: {
      component: LongTextField,
    },
  },
  galleryYear: {
    type: Number,
  },
  participation: {
    type: String,
  },
  standProposal: {
    type: String,
    max: 2000,
    uniforms: {
      component: LongTextField,
    },
  },
});
