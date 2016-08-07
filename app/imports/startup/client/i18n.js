import '/imports/i18n/es.js';
import '/imports/i18n/en.js';

function getLang() {
  if (!_.isUndefined(navigator.languages)) {
    return navigator.languages[0].substring(0, 2);
  }
  return navigator.language || navigator.browserLanguage;
}

i18n.setLocale(getLang());
