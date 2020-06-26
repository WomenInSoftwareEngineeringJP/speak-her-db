<template>
  <v-dialog
    v-model="visible"
    persistent
    max-width="500px"
  >
    <two-button-modal
      :title="`Contact ${speaker.name}?`"
      @click="submitForm()"
      @cancel="$emit('close')"
    >
      We'll send a message to contact {{ speaker.name }} on your behalf.

      <v-text-field
        ref="name"
        v-model="form.name"
        label="Your Name"
      />
      <v-text-field
        ref="name"
        v-model="form.email"
        label="Email"
      />
      <v-textarea
        ref="name"
        v-model="form.message"
        label="Message"
      />
    </two-button-modal>
  </v-dialog>
</template>


<script>
import TwoButtonModal from './TwoButtonModal.vue';

export default {
  components: {
    TwoButtonModal,
  },
  props: {
    speaker: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      message: '',
    },
  }),
  computed: {
    // Check if the essential data of the speaker is set
    visible() {
      return !!this.speaker.name;
    },
  },
  methods: {
    resetForm() {
      this.$set(this.form, 'name', '');
      this.$set(this.form, 'email', '');
      this.$set(this.form, 'message', '');
    },
    submitForm() {
      // TODO: How to send this to Netlify?
      console.log(this.form.name, this.speaker.name);
      this.resetForm();
      this.$emit('close');
    },
  },
};
</script>
