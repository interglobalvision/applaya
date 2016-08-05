const schemaLocaleBase = 'apply.sections.booth.';

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
    label: () => i18n.__(schemaLocaleBase + 'label'),
  },

  'boothSize.singleSize': {
    type: Boolean,
    label: () => i18n.__(schemaLocaleBase + 'boothSingle.label'),
    optional: true,
  },

  'boothSize.doubleSize': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothDouble.label'),
  },

  'boothSize.smallSize': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothSmall.label'),
  },

  'boothSize.mediumSize': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothMedium.label'),
  },

  'boothSize.plusSize': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothPlus.label'),
  },

  'boothSize.largeSize': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothLarge.label'),
  },

  'boothSize.extraSize': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothExtra.label'),
  },

});
