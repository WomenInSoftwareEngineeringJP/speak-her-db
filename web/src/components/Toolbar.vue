<template>
  <v-app-bar
    app
    color="primary"
    dark
    src="../assets/background.png"
    flat
    absolute
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

    <v-toolbar-items class="d-flex align-center" v-if="$vuetify.mdAndUp">
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
    <v-toolbar-items v-else>
      <v-btn text>
        <v-icon>menu</v-icon>
      </v-btn>
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
