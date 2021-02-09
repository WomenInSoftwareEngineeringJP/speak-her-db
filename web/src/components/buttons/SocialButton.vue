<template>
  <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        v-if="show"
        :href="link"
        target="_blank"
        icon
        :dark="dark"
        :x-large="xLarge"
        v-bind="attrs"
        v-on="on"
      >
        <slot />
      </v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    dark: {
      type: Boolean,
      default: false,
    },
    xLarge: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    show() {
      return this.link && this.link !== '';
    },
  },
};
</script>
