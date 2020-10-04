module.exports = {
  transpileDependencies: [
    'vuetify',
  ],

  publicPath: process.env.NODE_ENV === 'production' ? 'https://speakher.jp/' : '/',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
