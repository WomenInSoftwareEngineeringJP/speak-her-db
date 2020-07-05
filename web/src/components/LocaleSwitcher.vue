<template>
  <v-btn
    v-model="$i18n.locale"
    text
    prepend-icon="v-language"
    @click="changeLocale"
  >
    {{ language }}
  </v-btn>
</template>

<script>
import { getSupportedLocales } from '@/util/i18n/get-supported-locales';

export default {
  data: () => ({ locales: getSupportedLocales }),
  methods: {
    changeLocale(e) {
      const locale = e.target.value;
      this.$router.push(`/${locale}`);
    },
  },
};

</script>
