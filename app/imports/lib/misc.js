export const autoParagraph = (text) => {
  return {
    __html: '<p>' + text.split( /\n+/ ).join( '</p>\n<p>' ) + '</p>',
  }
};

