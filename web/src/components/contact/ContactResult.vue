<template>
  <v-dialog
    v-model="visible"
    max-width="500px"
  >
    <v-card>
      <v-card-title>{{ $t('contact.thanks') }}</v-card-title>
      <v-card-text>
        {{ $t('contact.forward', [name]) }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    visible: false,
  }),
  watch: {
    show() {
      this.visible = this.show;
    },
    visible(val, oldVal) {
      if (!val && oldVal) {
        this.$emit('close');
      }
    },
  },
};
</script>
