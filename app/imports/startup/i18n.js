import i18n from 'meteor/universe:i18n';


i18n.addTranslations('en-US', {
  common: {
    hello: 'Hello {$name} {$0}!',
  },

  apply: {
    completed: '{$percentage}% Complete',
  },
});

i18n.addTranslations('es-MX', {
  common: {
    hello: '¡Hola {$name} {$0}!',
  },

  apply: {
    completed: '{$percentage}% Completado',
  },
});

function getLang() {
  if (navigator.languages != undefined)  {
    return navigator.languages[0];
  }
  return navigator.language || navigator.browserLanguage;
}

i18n.setLocale(getLang());
