import i18n from 'meteor/universe:i18n';


i18n.addTranslations('en', {
  common: {
    hello: 'Hello {$name} {$0}!',
  },

  apply: {
    completed: '{$percentage}% Complete',
  },
});

i18n.addTranslations('es', {
  common: {
    hello: '¡Hola {$name} {$0}!',
  },

  apply: {
    completed: '{$percentage}% Completado',
  },
});

function getLang() {
  if (!_.isUndefined(navigator.languages)) {
    return navigator.languages[0].substring(0, 2);
  }
  return navigator.language || navigator.browserLanguage;
}

i18n.setLocale(getLang());
