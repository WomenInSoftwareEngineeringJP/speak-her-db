<template>
  <v-btn
    v-model="$i18n.locale"
    text
    @click="changeLocale"
  >
    <v-icon left>
      language
    </v-icon>
    {{ locale }}
  </v-btn>
</template>

<script>
import supportedLocales from '@/config/supported-locales';

const { en, ja } = supportedLocales;

export default {
  data: () => ({ locale: en }),
  methods: {
    changeLocale() {
      this.locale = (this.locale === en) ? ja : en;
    },
  },
};

</script>
