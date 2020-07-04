<template>
  <v-dialog
    v-model="visible"
    persistent
    max-width="500px"
  >
    <form
      name="contact-speaker"
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
          v-model="form.name"
          label="Your Name"
          :error-messages="nameErrors"
          @input="$v.form.name.$touch()"
          @blur="$v.form.name.$touch()"
        />
        <v-text-field
          v-model="form.email"
          label="Email"
          :error-messages="emailErrors"
          @input="$v.form.email.$touch()"
          @blur="$v.form.email.$touch()"
        />
        <v-textarea
          v-model="form.message"
          label="Message"
          :error-messages="messageErrors"
          @input="$v.form.message.$touch()"
          @blur="$v.form.message.$touch()"
        />
        <v-alert
          v-if="invalid"
          color="error"
          dense
          text
          class="mb-0"
        >
          All fields are required.
        </v-alert>
      </two-button-modal>
    </form>
  </v-dialog>
</template>


<script>
import TwoButtonModal from '@/components/cards/TwoButtonModal.vue';
import axios from 'axios';
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default {
  components: {
    TwoButtonModal,
  },
  mixins: [validationMixin],
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
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      message: {
        required,
      },
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
    invalid() {
      return this.$v.$error;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      if (!this.$v.form.name.required) { errors.push('Name is required.'); }
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) { return errors; }
      if (!this.$v.form.email.email) { errors.push('Must be valid e-mail'); }
      if (!this.$v.form.email.required) { errors.push('E-mail is required'); }
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.form.message.$dirty) { return errors; }
      if (!this.$v.form.message.required) { errors.push('A brief message is required'); }
      return errors;
    },
  },
  methods: {
    resetForm() {
      this.$set(this.form, 'name', '');
      this.$set(this.form, 'email', '');
      this.$set(this.form, 'message', '');
      this.$v.$reset();
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&');
    },
    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };
      this.form.speaker = this.speaker.name;
      axios.post(
        '/',
        this.encode({
          'form-name': 'contact-speaker',
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
