import React from 'react';

const T = i18n.createComponent();
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
    label: () => <T>{schemaLocaleBase + 'label'}</T>,
  },

  'boothSize.project': {
    type: Boolean,
    label: () => <T>{schemaLocaleBase + 'project.label'}</T>,
    optional: true,
  },

  'boothSize.principal1': {
    type: Boolean,
    optional: true,
    label: () => <T>{schemaLocaleBase + 'principal1.label'}</T>,
  },

  'boothSize.principal2': {
    type: Boolean,
    optional: true,
    label: () => <T>{schemaLocaleBase + 'principal2.label'}</T>,
  },

  'boothSize.principal3': {
    type: Boolean,
    optional: true,
    label: () => <T>{schemaLocaleBase + 'principal3.label'}</T>,
  },

  'boothSize.principal4': {
    type: Boolean,
    optional: true,
    label: () => <T>{schemaLocaleBase + 'principal4.label'}</T>,
  },

  'boothSize.principal5': {
    type: Boolean,
    optional: true,
    label: () => <T>{schemaLocaleBase + 'principal5.label'}</T>,
  },

  'boothSize.principal6': {
    type: Boolean,
    optional: true,
    label: () => <T>{schemaLocaleBase + 'principal6.label'}</T>,
  },

  'boothSize.principal7': {
    type: Boolean,
    optional: true,
    label: () => <T>{schemaLocaleBase + 'principal7.label'}</T>,
  },

  'boothSize.principal8': {
    type: Boolean,
    optional: true,
    label: () => <T>{schemaLocaleBase + 'principal8.label'}</T>,
  },
});
