<template>
  <v-form class="my-3">
    <name-input
      v-model="form.speakerName"
    />
    <v-text-field
      v-model="form.speakerEmail"
      label="Email"
      outlined
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
    />
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

export default {
  components: {
    NameInput,
    JobInput,
    LocationInput,
    SubmitterInput,
  },
  data() {
    return {
      form: {
        speakerName: {
          title: '',
          first: '',
          middle: '',
          last: '',
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
        permisssion: false,
      },
    };
  },
  methods: {
    submit() {
      // TODO
    },
  },
};
</script>
