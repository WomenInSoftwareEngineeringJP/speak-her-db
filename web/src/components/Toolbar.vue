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

    <v-toolbar-items
      v-if="$vuetify.breakpoint.mdAndUp"
      class="d-flex align-center"
    >
      <div
        v-for="item in filteredItems"
        :key="item.title"
      >
        <v-btn
          text
          :href="item.path"
        >
          {{ item.title }}
        </v-btn>
      </div>
      <v-divider
        class="mx-4"
        inset
        vertical
      />
      <language-switcher />
    </v-toolbar-items>
    <v-toolbar-items v-else>
      <v-btn
        text
        @click="$emit('click-menu')"
      >
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
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    // some navigation items aren't meant for display in the toolbar, so filter
    // them out
    filteredItems() {
      return this.items.filter((item) => !item.hideInToolbar);
    },
  },
};
</script>
