<template>
  <p>{{ $t('message') }}</p>
</template>

<script>
import i18n from '@/i18n';

console.log('Active locale: ', i18n.locale);

export default {
  name: 'HelloI18n',
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
