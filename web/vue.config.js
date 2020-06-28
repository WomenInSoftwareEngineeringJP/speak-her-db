const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return null;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          ['/'],
          ['/find-speaker'],
          {
            // options
          },
        ),
      ],
    };
  },
};
