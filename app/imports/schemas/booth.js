export const BoothSchema = new SimpleSchema({
  boothSize: {
    type: Object,
    minCount: 1,
    custom() {
      // Check if all values are false; if none booth size is checked
      if (_.every(this.value, val => val === false)) {
        return 'minCount';
      }
    },
  },

  'boothSize.single': {
    type: Boolean,
  },

  'boothSize.double': {
    type: Boolean,
    optional: true,
  },

  'boothSize.small': {
    type: Boolean,
    optional: true,
  },

  'boothSize.medium': {
    type: Boolean,
    optional: true,
  },

});
