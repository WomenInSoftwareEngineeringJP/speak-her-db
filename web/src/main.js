import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import Airtable from './plugins/airtable';
import '@mdi/font/css/materialdesignicons.css';
import i18n from './i18n/i18n';

import '@/styles/main.scss';

Vue.use(Airtable); // install our customized Airtable plugin
Vue.config.productionTip = false;

Vue.use(Vuelidate);

// Creation of the bus for emitting events from children to non-parent components
window.bus = new Vue();

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
