var manageTranslations = require('react-intl-translations-manager').default;


manageTranslations({
  messagesDirectory: 'src/public/i18n/messages/',
  translationsDirectory: 'src/public/i18n/lang/',
  languages: ['en', 'fr'] // any language you need 
});