<template>
  <v-app-bar
    app
    color="primary"
    dark
    src="../assets/background.png"
    elevation="0"
    hide-on-scroll
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
        href="about"
      >
        About
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
