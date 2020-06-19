import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import i18n from './util/i18n';

import '@/styles/main.scss';

Vue.config.productionTip = false;

// Creation of the bus for emitting events from children to non-parent components
window.bus = new Vue();

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
