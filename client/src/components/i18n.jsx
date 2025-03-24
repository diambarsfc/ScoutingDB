// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // optional if you want auto-detection
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          welcome: "Bienvenue",
          hello: "Bonjour",
          // Add more translations here
        },
      },
      en: {
        translation: {
          welcome: "Welcome",
          hello: "Hello",
        },
      },
    },
    lng: 'fr', // 👉 Set default language to French
    fallbackLng: 'fr', // 👉 Fall back to French if translation is missing

    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
