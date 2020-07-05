<template>
  <v-form
    class="my-3"
    @submit.prevent="handleSubmit"
  >
    <name-input
      v-model="form.name"
    />
    <v-text-field
      v-model="form.email"
      label="Email"
      outlined
    />
    <job-input
      v-model="form.job"
    />
    <location-input
      v-model="form.location"
    />
    <v-textarea
      v-model="form.speaker_bio"
      label="Speaker Bio"
      hint="A brief description of the nominee"
      outlined
    />
    <topics-input v-model="form.topics" />
    <v-row dense>
      <v-col
        cols="12"
        md="6"
        xs="12"
      >
        <v-autocomplete
          v-model="form.languages"
          label="Languages"
          :items="languageOptions"
          multiple
          outlined
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        xs="12"
      >
        <v-text-field
          v-model="form.photo_url"
          label="Photo URL"
          outlined
        />
      </v-col>
    </v-row>
    <urls-input
      v-model="form.urls"
    />
    <submitter-input
      v-model="form.submitter"
    />
    <v-checkbox
      v-model="form.consent"
      class="mt-0"
      label="I have the speaker's permission to submit her information to the SpeakHer database."
    />
    <v-btn
      color="primary"
      type="submit"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
import NameInput from '@/components/nomination/NameInput.vue';
import JobInput from '@/components/nomination/JobInput.vue';
import LocationInput from '@/components/nomination/LocationInput.vue';
import UrlsInput from '@/components/nomination/UrlsInput.vue';
import SubmitterInput from '@/components/nomination/SubmitterInput.vue';
import TopicsInput from '@/components/nomination/TopicsInput.vue';

export default {
  components: {
    NameInput,
    JobInput,
    LocationInput,
    UrlsInput,
    SubmitterInput,
    TopicsInput,
  },
  data() {
    return {
      languageOptions: ['English', '日本語'],
      form: {
        name: {
          en: '',
          ja: '',
        },
        email: '',
        photo_url: '',
        job: {
          title: '',
          company: '',
        },
        speaker_bio: '',
        location: {
          city: '',
          prefecture: '',
        },
        urls: {
          linkedin: '',
          twitter: '',
          facebook: '',
          website: '',
        },
        submitter: {
          name: '',
          email: '',
        },
        topics: [],
        languages: [],
        consent: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      const payload = this.parseFormData();
      if (process.env.NODE_ENV === 'production') {
        this.$db('People').create(payload, this.afterSave);
      } else {
        console.log(payload);
      }
    },
    // parse the data into the payload format expected by Airtable
    parseFormData() {
      /* eslint-disable camelcase */

      // copy the the fields that don't need parsing from the form object
      const {
        email, photo_url, speaker_bio, topics, languages,
      } = this.form;
      let payloadFields = {
        email, photo_url, speaker_bio, topics, languages,
      };

      // now parse the rest
      payloadFields = {
        ...payloadFields,
        job_title: this.form.job.title,
        company: this.form.job.company,
        city: this.form.location.city,
        location_id: [this.form.location.prefecture],
      };

      Object.keys(this.form.name).forEach((field) => {
        payloadFields[`name_${field}`] = this.form.name[field];
      });
      Object.keys(this.form.urls).forEach((field) => {
        payloadFields[`${field}_url`] = this.form.urls[field];
      });
      Object.keys(this.form.submitter).forEach((field) => {
        payloadFields[`submitter_${field}`] = this.form.submitter[field];
      });

      // Airtable expects an array of objects with the key `fields`
      return [{ fields: payloadFields }];
    },
    afterSave(err, records) {
      if (err) {
        // Do something on error
        console.error(err);
      } else {
        // Do something on success
        console.log(`Successfully saved ${records.length} records!`);
      }
    },
  },
};
</script>
