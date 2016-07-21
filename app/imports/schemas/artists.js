const schemaLocaleBase = 'apply.sections.artists.';

export const ArtistsSchema = new SimpleSchema({
  // Artists
  artists: {
    type: [ Object ],
    minCount: 1,
    label: () => i18n.__(schemaLocaleBase + 'label'),
  },
  'artists.$.name': {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'name.label'),
  },
  /*
  * To be implemented
  'artists.$.cv': {
    type: String,
    autoform: {
      type: "docUpload",
    },
  },
  */
  'artists.$.work': {
    type: [ Object ],
    minCount: 1,
    maxCount: 5,
    label: () => i18n.__(schemaLocaleBase + 'work.label'),
  },
  /*
   * To be implemented
  'artists.$.work.$.image': {
    type: String,
    autoform: {
      type: "imageUpload",
    },
  },
  */
  'artists.$.work.$.workTitle': {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'work.image.label'),
  },
  'artists.$.work.$.medium': {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'work.medium.label'),
  },
  'artists.$.work.$.dimensions': {
    type: String,
    label: () => i18n.__(schemaLocaleBase + 'work.dimensions.label'),
  },
  'artists.$.work.$.year': {
    type: Number,
    label: () => i18n.__(schemaLocaleBase + 'work.year.label'),
  },
});
