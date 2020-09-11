import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#7e2c85',
        secondary: '#842b5f',
        accent: '#c33764',
      },
    },
  },
});
