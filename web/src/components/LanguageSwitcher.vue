<template>
  <v-btn
    text
    @click="swapLanguage"
  >
    {{ language }}
  </v-btn>
</template>

<script>
const en = 'English';
const ja = '日本語';

export default {
  data() {
    return {
      language: en,
    };
  },
  methods: {
    swapLanguage() {
      this.language = (this.language === en) ? ja : en;
    },
  },
};
</script>
