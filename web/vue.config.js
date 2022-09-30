module.exports = {
  transpileDependencies: [
    'vuetify',
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
  // Disable uglify mangle options because it breaks
  // netlify lamda function with the following error message:
  // TypeError - Expected signal to be an instanceof AbortSignal
  chainWebpack: config => {
    config.optimization
      .minimizer('terser')
      .tap(args => {
        const { terserOptions } = args[0]
        terserOptions.keep_classnames = true
        terserOptions.keep_fnames = true
        return args
      })
    },
};
