<template>
  <v-btn
    v-if="show"
    :href="link"
    target="_blank"
    icon
    :dark="dark"
    :x-large="xLarge"
    color="primary"
  >
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
