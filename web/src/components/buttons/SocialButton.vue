<template>
  <v-btn
    v-if="show"
    :href="link"
    target="_blank"
    icon
    :dark="dark"
    :x-large="xLarge"
  >
    <slot />
  </v-btn>
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
