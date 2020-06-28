<template>
  <v-dialog
    v-model="visible"
    persistent
    max-width="500px"
  >
    <form
      name="contact"
      method="POST"
      data-netlify="true"
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
          name="userName"
        />
        <v-text-field
          ref="name"
          v-model="form.email"
          label="Email"
          name="userEmail"
        />
        <v-textarea
          ref="name"
          v-model="form.message"
          label="Message"
          name="userMessage"
        />
      </two-button-modal>
    </form>
  </v-dialog>
</template>


<script>
import TwoButtonModal from '@/components/cards/TwoButtonModal.vue';

export default {
  components: {
    TwoButtonModal,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
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
    visible() {
      return this.show;
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
      this.resetForm();
      this.$emit('submit');
    },
  },
};
</script>
