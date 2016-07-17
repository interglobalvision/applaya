export const ArtistsSchema = new SimpleSchema({
  // Artists
  artists: {
    type: [ Object ],
    minCount: 1,
  },
  'artists.$.name': {
    type: String,
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
  },
  'artists.$.work.$.medium': {
    type: String,
  },
  'artists.$.work.$.dimensions': {
    type: String,
  },
  'artists.$.work.$.year': {
    type: Number,
  },
});
