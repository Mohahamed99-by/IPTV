// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define translations
const resources = {
  en: {
    translation: {
      title: 'Experience TV Like Never Before',
      description: 'Unlimited channels, crystal-clear HD quality, and on-demand content at your fingertips. Welcome to the future of television.',
      viewPackages: 'View Packages',
      watchDemo: 'Watch Demo',
      home: 'Home',
      packages: 'Packages',
      contact: 'Contact',
      
    },
  },
  ar: {
    translation: {
      title: 'اختبر التلفزيون كما لم يحدث من قبل',
      description: 'قنوات غير محدودة، جودة HD واضحة، ومحتوى عند الطلب في متناول يدك. مرحباً بك في مستقبل التلفزيون.',
      viewPackages: 'عرض الباقات',
      watchDemo: 'شاهد العرض',
      home: 'الرئيسية',
      packages: 'الباقات',
      contact: 'تواصل',
    },
  },
  // You can add more languages here
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    keySeparator: false, // we don't use keys in our translations
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
