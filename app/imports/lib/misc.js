export const autoParagraph = (text) => {
  if (text) {
    return {
      __html: '<p>' + text.split( /\n+/ ).join( '</p>\n<p>' ) + '</p>',
    }
  }
};
