<template>
  <v-btn
    v-if="show"
    :href="link"
    target="_blank"
    icon
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    show() {
      return this.link && this.link !== '';
    },
  },
};
</script>
