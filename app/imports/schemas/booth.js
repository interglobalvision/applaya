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

  'boothSize.single': {
    type: Boolean,
    label: () => i18n.__(schemaLocaleBase + 'boothSingle.label'),
  },

  'boothSize.double': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothDouble.label'),
  },

  'boothSize.small': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothSmall.label'),
  },

  'boothSize.medium': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothMedium.label'),
  },

  'boothSize.plus': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothPlus.label'),
  },

  'boothSize.large': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothLarge.label'),
  },

  'boothSize.extra': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'boothExtra.label'),
  },

});
