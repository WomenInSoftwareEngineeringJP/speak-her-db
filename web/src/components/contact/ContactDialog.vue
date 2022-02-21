<template>
  <v-dialog
    v-model="visible"
    persistent
    max-width="500px"
  >
    <v-card>
      <v-card-title>{{ $t('contact.title') }}</v-card-title>
      <v-card-text px-8>
        {{ $t('contact.relayEnded') }}
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          @click="$emit('close')"
        >
          {{ $t('actions.ok') }}
        </v-btn>
      </v-card-actions>
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
  },
  data: () => ({

  }),
  computed: {
    visible() {
      return this.show;
    },
  },
};
</script>
