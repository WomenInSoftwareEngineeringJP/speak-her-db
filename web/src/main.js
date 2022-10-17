import { createApp, configureCompat } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import Airtable from './plugins/airtable';
import '@mdi/font/css/materialdesignicons.css';
import i18n from './i18n/i18n';
import mitt from 'mitt';
import { VBtn, VAutocomplete, VExpansionPanelTitle } from 'vuetify/lib/components';

import '@/styles/main.scss';

const emitter = mitt();

// disable async component compat - vuetify breaks if enabled
configureCompat({
   COMPONENT_ASYNC: false,
   WATCH_ARRAY: false,
   COMPONENT_V_MODEL: false,
})

VBtn.compatConfig = {
  MODE: 3,
}
VAutocomplete.compatConfig = {
  MODE: 3,
}
VExpansionPanelTitle.compatConfig = {
  ATTR_FALSE_VALUE: false,
}

const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(router)
app.use(vuetify)
app.use(Airtable)
app.use(i18n)
app.mount('#app')
