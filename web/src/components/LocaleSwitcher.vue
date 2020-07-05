<template>
  <v-btn
    text
    @click='changeLocale'
    prepend-icon='v-language'
    v-model='$i18n.locale'
  >
    {{ language }}
  </v-btn>
</template>

<script>
import { getSupportedLocales } from '@/util/i18n/get-supported-locales';

export default {
  data: () => {
    return { locales: getSupportedLocales() }
  },
  methods: {
    changeLocale(e) {
      const locale = e.target.value;
      this.$router.push(`/${locale}`);
    },
  },
};

</script>
