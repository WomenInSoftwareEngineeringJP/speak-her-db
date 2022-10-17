<template>
  <div
    class="grid grid-cols-6 gap-4"
  >
    <div>
    <a
      href="/"
    >
      <h1 class="text-3xl font-bold text-purple-800">
        {{ $t('hero.title') }}
      </h1>
    </a>
  </div>

    <div
      v-if="true"
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
      <locale-switcher />
    </div>
    <div v-else>
      <v-btn
        text
        @click="$emit('click-menu')"
      >
        <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
        <v-icon>menu</v-icon>
      </v-btn>
    </div>
  </div>
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
