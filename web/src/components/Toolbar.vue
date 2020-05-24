<template>
<v-app-bar
      app
      color="primary"
      dark
    >
    <v-toolbar-title>
      SpeakHer
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="d-flex align-center">
        <v-btn
          text
          href="/about"
        >About
        </v-btn>
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
