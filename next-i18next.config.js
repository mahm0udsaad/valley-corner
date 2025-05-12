/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    localeDetection: false,
  },
  localePath: '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
} 