<template>
  <v-btn
    text
    @click="changeLocale"
  >
    <v-icon left>
      language
    </v-icon>
    {{ locale.label }}
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
      this.$i18n.locale = this.locale.code;
    },
  },
};

</script>
