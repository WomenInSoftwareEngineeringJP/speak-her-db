<template>
  <v-app-bar
    app
    color="primary"
    absolute
    flat
  >
    <template #image>
      <v-img src="@/assets/background.svg" />
    </template>
    <v-btn
      href="/"
      :text="$t('hero.title')"
      size="x-large"
      variant="text"
    >
      <v-app-bar-title>
        {{ $t('hero.title') }}
      </v-app-bar-title>
    </v-btn>

    <v-spacer />

    <v-toolbar-items
      class="d-flex align-center"
    >
      <div
        v-for="item in filteredItems"
        :key="item.title"
      >
        <v-btn
          :text="item.title"
          :href="item.path"
          variant="text"
        >
          {{ item.title }}
        </v-btn>
      </div>
      <v-divider
        class="mx-4"
        inset
        vertical
      />
      <locale-switcher />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>

import LocaleSwitcher from './LocaleSwitcher.vue';

export default {
  components: {
    LocaleSwitcher,
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
