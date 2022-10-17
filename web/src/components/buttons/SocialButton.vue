<template>
  <v-btn
    v-if="show"
    variant="text"
    :href="link"
    icon
    target="_blank"
    size="x-large"
    color="primary"
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
      default: true,
    },
  },
  computed: {
    show() {
      return this.link && this.link !== '';
    },
  },
};
</script>
