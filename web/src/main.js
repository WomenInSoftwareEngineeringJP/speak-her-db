import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import i18n from './i18n';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
