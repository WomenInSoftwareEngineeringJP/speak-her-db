<template>
  <v-dialog
    v-model="visible"
    persistent
  >
    <v-card>
      Contact {{ speaker.name }}

      <v-btn @click="$emit('cancel')">
        Cancel
      </v-btn>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  props: {
    speaker: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {

    };
  },
  computed: {
    visible() {
      return !!this.speaker.name;
    },
  },

};
</script>
