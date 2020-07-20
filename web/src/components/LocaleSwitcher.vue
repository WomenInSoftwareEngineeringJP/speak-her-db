<template>
  <v-btn
    text
    @click="changeLocale"
  >
    <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
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
  watch: {
    locale() {
      this.$i18n.locale = this.locale.code || en.code;
    },
  },
  created() {
    this.locale = JSON.parse(localStorage.locale || null) || en;
  },
  methods: {
    changeLocale() {
      console.log(this.locale, en);
      this.locale = (this.locale.code === en.code) ? ja : en;
      localStorage.locale = JSON.stringify(this.locale);
    },
  },
};

</script>
