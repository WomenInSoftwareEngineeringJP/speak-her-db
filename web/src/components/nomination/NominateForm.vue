<template>
  <v-form class="my-3">
    <name-input
      v-model="form.speakerName"
    />
    <v-text-field
      v-model="form.speakerEmail"
      label="Email"
      outlined
      :error-messages="speakerEmailErrors"
      @input="$v.form.speakerEmail.$touch()"
      @blur="$v.form.speakerEmail.$touch()"
    />
    <job-input
      v-model="form.firstJob"
    />
    <location-input
      v-model="form.location"
    />
    <v-textarea
      v-model="form.speakerBio"
      label="Speaker Bio"
      hint="A brief description of the nominee"
      outlined
      :error-messages="speakerBioErrors"
      @input="$v.form.speakerBio.$touch()"
      @blur="$v.form.speakerBio.$touch()"
    />
    <topics-input v-model="form.topics" />

    <submitter-input
      v-model="form.submitterInput"
    />
    <v-checkbox
      v-model="form.permission"
      class="mt-0"
      label="I have the speaker's permission to submit her information to the SpeakHer database."
    />
    <v-btn color="primary">
      Submit
    </v-btn>
  </v-form>
</template>

<script>
import NameInput from '@/components/nomination/NameInput.vue';
import JobInput from '@/components/nomination/JobInput.vue';
import LocationInput from '@/components/nomination/LocationInput.vue';
import SubmitterInput from '@/components/nomination/SubmitterInput.vue';
import TopicsInput from '@/components/nomination/TopicsInput.vue';
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  components: {
    NameInput,
    JobInput,
    LocationInput,
    SubmitterInput,
    TopicsInput,
  },
  mixins: [validationMixin],
  validations: {
    form: {
      speakerName: {
        english: { required },
        japanese: { required },
      },
      speakerEmail: {
        required,
        email,
      },
      speakerBio: {
        required,
        minLength: minLength(50),
      },
    },
  },
  data() {
    return {
      form: {
        speakerName: {
          english: '',
          japanese: '',
        },
        speakerEmail: '',
        firstJob: {
          title: '',
          company: '',
        },
        speakerBio: '',
        location: {
          city: '',
          prefecture: '',
        },
        submitterInput: {
          name: '',
          email: '',
        },
        topics: [],
        permisssion: false,
      },
    };
  },
  computed: {
    speakerEmailErrors() {
      const errors = [];
      if (!this.$v.form.speakerEmail.$dirty) { return errors; }
      if (!this.$v.form.speakerEmail.email) { errors.push('Must be valid e-mail'); }
      if (!this.$v.form.speakerEmail.required) { errors.push('E-mail is required'); }
      return errors;
    },
    speakerBioErrors() {
      const errors = [];
      if (!this.$v.form.speakerBio.$dirty) { return errors; }
      if (!this.$v.form.speakerBio.required) { errors.push('Bio is required'); }
      if (!this.$v.form.speakerBio.minLength) { errors.push('Please write at least 50 characters'); }
      return errors;
    },
  },
  methods: {
    resetForm() {
      this.$set(this.form, 'speakerName', { english: '', japanese: '' });
      this.$set(this.form, 'speakerEmail', '');
      this.$set(this.form, 'firstJob', { title: '', company: '' });
      this.$set(this.form, 'speakerBio', '');
      this.$set(this.form, 'location', { city: '', prefecture: '' });
      this.$set(this.form, 'submitterInput', { name: '', email: '' });
      this.$v.$reset();
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.error('invalid form');
      }
      // TODO
    },
  },
};
</script>
