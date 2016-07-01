export const BoothSchema = new SimpleSchema({
  
  'boothSingle': {
    type: Boolean,
    optional: true,
  },
  'boothDouble': {
    type: Boolean,
    optional: true,
  },
  'boothSmall': {
    type: Boolean,
    optional: true,
  },
  'boothMedium': {
    type: Boolean,
    optional: true,
  },
});

BoothSchema.messages({
  emptyCheckboxes: 'Select at least one booth size',
});
