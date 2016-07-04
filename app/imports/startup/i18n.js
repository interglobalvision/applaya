import i18n from 'meteor/universe:i18n';

import 'import/i18n/es.js';
import 'import/i18n/en.js';

function getLang() {
  if (navigator.languages != undefined)  {
    return navigator.languages[0].substring(0, 2);
  }
  return navigator.language || navigator.browserLanguage;
}

i18n.setLocale(getLang());
