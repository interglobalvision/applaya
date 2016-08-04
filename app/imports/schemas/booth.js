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

  'boothSize.boothSingle': {
    type: Boolean,
    label: () => i18n.__(schemaLocaleBase + 'boothSingle.label'),
  },

  'boothSize.boothDouble': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothDouble.label'),
  },

  'boothSize.boothSmall': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothSmall.label'),
  },

  'boothSize.boothMedium': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothMedium.label'),
  },

  'boothSize.boothPlus': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothPlus.label'),
  },

  'boothSize.boothLarge': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothLarge.label'),
  },

  'boothSize.boothExtra': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothExtra.label'),
  },

});
