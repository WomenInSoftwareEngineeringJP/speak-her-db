<template>
  <v-alert
    v-if="message !== ''"
    :type="safeType"
    class="my-5"
    text
  >
    {{ message }}
  </v-alert>
</template>


<script>
const VALID_TYPES = new Set(['success', 'info', 'warning', 'error']);

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'info',
    },
  },
  computed: {
    safeType() {
      if (this.type && VALID_TYPES.has(this.type)) {
        return this.type;
      }
      return 'info';
    },
  },
};
</script>
