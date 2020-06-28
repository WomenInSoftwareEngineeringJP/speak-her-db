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
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input
        type="hidden"
        name="form-name"
        value="ask-question"
      >
      <two-button-modal
        :title="`Contact ${speaker.name}?`"
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
import axios from 'axios';

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
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&');
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };
      this.form.speaker = this.speaker.name;
      axios.post(
        '/',
        this.encode({
          'form-name': 'ask-question',
          ...this.form,
        }),
        axiosConfig,
      );
      this.resetForm();
      this.$emit('submit');
    },
  },
};
</script>
