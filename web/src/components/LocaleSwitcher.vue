<template>
  <v-select
    v-model='$i18n.locale'
    prepend-icon='fa-globe'
    class='locale-switcher'
  >
  </v-select>
</template>

<script>
import { getSupportedLocales } from '@/util/i18n/get-supported-locales';

export default {
  data: () => ({ locales: getSupportedLocales() }),
  methods: {
    changeLocale(e) {
      const locale = e.target.value;
      this.$router.push(`/${locale}`);
    },
  },
};

</script>
