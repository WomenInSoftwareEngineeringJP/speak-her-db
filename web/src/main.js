import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import Airtable from './plugins/airtable';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

import '@/styles/main.scss';

Vue.use(Airtable); // install our customized Airtable plugin
Vue.config.productionTip = false;

Vue.use(Vuelidate);

// Creation of the bus for emitting events from children to non-parent components
window.bus = new Vue();

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
