<template>
  <v-app-bar
    app
    dense
    dark
    flat
  >
    <v-btn
      href="/"
      text
    >
      <v-toolbar-title>
        SpeakHer
      </v-toolbar-title>
    </v-btn>

    <v-spacer />

    <v-toolbar-items class="d-flex align-center">
      <v-btn
        text
        target="_blank"
        href="https://airtable.com/shrOSFTp1mDij00AK"
      >
        Nominate A Speaker
      </v-btn>
      <v-divider
        class="mx-4"
        inset
        vertical
      />
      <language-switcher />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>

import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  components: {
    LanguageSwitcher,
  },
  data() {
    return {

    };
  },
};
</script>
