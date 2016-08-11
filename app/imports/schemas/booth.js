import React from 'react';

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

  'boothSize.project': {
    type: Boolean,
    label: () => i18n.__(schemaLocaleBase + 'project.label'),
    optional: true,
  },

  'boothSize.principal1': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'principal1.label'),
  },

  'boothSize.principal2': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'principal2.label'),
  },

  'boothSize.principal3': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'principal3.label'),
  },

  'boothSize.principal4': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'principal4.label'),
  },

  'boothSize.principal5': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'principal5.label'),
  },

  'boothSize.principal6': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'principal6.label'),
  },

  'boothSize.principal7': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'principal7.label'),
  },

  'boothSize.principal8': {
    type: Boolean,
    optional: true,
    label: () => i18n.__(schemaLocaleBase + 'principal8.label'),
  },
});
