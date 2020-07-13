<template>
  <v-form
    class="my-3"
    @submit.prevent="handleSubmit()"
  >
    <name-input
      v-model="form.name"
      :english-errors="englishErrors"
      :japanese-errors="japaneseErrors"
      @touch-english="$v.form.name.en.$touch()"
      @touch-japanese="$v.form.name.ja.$touch()"
    />
    <v-text-field
      v-model="form.email"
      label="Email"
      outlined
      :error-messages="emailErrors($v.form.email)"
      @input="delayTouch($v.form.email)"
      @blur="delayTouch($v.form.email)"
    />
    <job-input
      v-model="form.job"
    />
    <location-input
      v-model="form.location"
      :city-errors="cityErrors"
      :prefecture-errors="prefectureErrors"
      @touch-city="$v.form.location.city.$touch()"
      @touch-prefecture="$v.form.location.prefecture.$touch()"
    />
    <v-textarea
      id="speaker-bio"
      v-model="form.speaker_bio"
      label="Speaker Bio"
      hint="A brief description of the nominee"
      outlined
      :error-messages="speakerBioErrors"
      @input="delayTouch($v.form.speaker_bio)"
      @blur="delayTouch($v.form.speaker_bio)"
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
          :error-messages="languagesErrors"
          :items="languageOptions"
          multiple
          outlined
          @input="$v.form.languages.$touch()"
          @blur="$v.form.languages.$touch()"
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
          :error-messages="urlErrors($v.form.photo_url)"
          outlined
          @input="delayTouch($v.form.photo_url)"
          @blur="delayTouch($v.form.photo_url)"
        />
      </v-col>
    </v-row>
    <urls-input
      v-model="form.urls"
      :fb-errors="urlErrors($v.form.urls.facebook)"
      :linkedin-errors="urlErrors($v.form.urls.linkedin)"
      :twitter-errors="urlErrors($v.form.urls.twitter)"
      :website-errors="urlErrors($v.form.urls.website)"
      @touch-fb="delayTouch($v.form.urls.facebook)"
      @touch-linkedin="delayTouch($v.form.urls.linkedin)"
      @touch-twitter="delayTouch($v.form.urls.twitter)"
      @touch-website="delayTouch($v.form.urls.website)"
    />
    <submitter-input
      v-model="form.submitter"
      :name-errors="submitterNameErrors"
      :email-errors="emailErrors($v.form.submitter.email)"
      @touch-name="$v.form.submitter.name.$touch()"
      @touch-email="delayTouch($v.form.submitter.email)"
    />
    <v-checkbox
      v-model="form.consent"
      class="mt-0"
      label="I have the speaker's permission to submit her information to the SpeakHer database."
      :error-messages="consentErrors"
      @input="$v.form.consent.$touch()"
      @blur="$v.form.consent.$touch()"
    />
    <v-btn
      class="mr-5"
      @click="resetForm"
    >
      Reset Form
    </v-btn>
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
import { validationMixin } from 'vuelidate';
import {
  required, email, minLength, url,
} from 'vuelidate/lib/validators';
import japanese from '@/validators/japanese';

const isTrue = (value) => value;
const touchMap = new WeakMap();
const VALIDATION_DELAY = 1000;

export default {
  components: {
    NameInput,
    JobInput,
    LocationInput,
    UrlsInput,
    SubmitterInput,
    TopicsInput,
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        en: { required },
        ja: { required, japanese },
      },
      email: {
        required,
        email,
      },
      languages: { required },
      speaker_bio: {
        required,
        minLength: minLength(50),
      },
      location: {
        city: { required },
        prefecture: { required },
      },
      consent: {
        isTrue,
      },
      submitter: {
        name: { required },
        email: { required, email },
      },
      photo_url: { url },
      urls: {
        facebook: { url },
        twitter: { url },
        linkedin: { url },
        website: { url },
      },
    },
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
  computed: {
    englishErrors() {
      const errors = [];
      if (!this.$v.form.name.en.$dirty) { return errors; }
      if (!this.$v.form.name.en.required) { errors.push('Name is required'); }
      return errors;
    },
    japaneseErrors() {
      const errors = [];
      if (!this.$v.form.name.ja.$dirty) { return errors; }
      if (!this.$v.form.name.ja.required) { errors.push('Japanese name is required'); }
      if (!this.$v.form.name.ja.japanese) { errors.push('Please enter your name in Kanji / Kana'); }
      return errors;
    },
    languagesErrors() {
      const errors = [];
      if (!this.$v.form.languages.$dirty) { return errors; }
      if (!this.$v.form.languages.required) { errors.push('Please select spoken languages'); }
      return errors;
    },
    speakerBioErrors() {
      const errors = [];
      if (!this.$v.form.speaker_bio.$dirty) { return errors; }
      if (!this.$v.form.speaker_bio.required) { errors.push('Bio is required'); }
      if (!this.$v.form.speaker_bio.minLength) { errors.push('Please write at least 50 characters'); }
      return errors;
    },
    cityErrors() {
      const errors = [];
      if (!this.$v.form.location.city.$dirty) { return errors; }
      if (!this.$v.form.location.city.required) { errors.push('City is required'); }
      return errors;
    },
    prefectureErrors() {
      const errors = [];
      if (!this.$v.form.location.prefecture.$dirty) { return errors; }
      if (!this.$v.form.location.prefecture.required) { errors.push('Prefecture is required'); }
      return errors;
    },
    submitterNameErrors() {
      const errors = [];
      if (!this.$v.form.submitter.name.$dirty) { return errors; }
      if (!this.$v.form.submitter.name.required) { errors.push('Name is required'); }
      return errors;
    },
    consentErrors() {
      const errors = [];
      if (!this.$v.form.consent.$dirty) { return errors; }
      if (!this.$v.form.consent.isTrue) { errors.push('Please ask the nominee for permission'); }
      return errors;
    },
  },
  mounted() {
    // Prevent enter from submitting the form inside the bio text area
    const ENTER = 13;
    document.getElementById('speaker-bio').addEventListener('keypress', (event) => {
      if (event.keyCode === ENTER) {
        event.preventDefault();
      }
    });
  },
  methods: {
    // must pass in this.$v.form.[field]
    emailErrors(field) {
      const errors = [];
      if (!field.$dirty) { return errors; }
      if (!field.email) { errors.push('Must be valid e-mail'); }
      if (!field.required) { errors.push('E-mail is required'); }
      return errors;
    },
    // must pass in this.$v.form.[field]
    urlErrors(field) {
      const errors = [];
      if (!field.$dirty) { return errors; }
      if (!field.url) { errors.push('Must be valid url'); }
      return errors;
    },
    resetForm() {
      this.$set(this.form, 'name', { en: '', ja: '' });
      this.$set(this.form, 'speakerEmail', '');
      this.$set(this.form, 'job', { title: '', company: '' });
      this.$set(this.form, 'speaker_bio', '');
      this.$set(this.form, 'location', { city: '', prefecture: '' });
      this.$set(this.form, 'submitter', { name: '', email: '' });
      this.$set(this.form, 'urls', {
        linkedin: '',
        twitter: '',
        facebook: '',
        website: '',
      });
      this.$set(this.form, 'photo_url', '');
      this.$set(this.form, 'languages', []);
      this.$set(this.form, 'topics', []);
      this.$set(this.form, 'consent', false);
      this.$v.$reset();
    },
    handleSubmit() {
      // Check validity
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.error('invalid form', this.form);
        return;
      }

      const payload = this.parseFormData();
      if (process.env.NODE_ENV === 'production') {
        this.$db('People').create(payload, this.afterSave);
      } else {
        console.log(payload);
      }
      this.resetForm();
    },
    // parse the data into the payload format expected by Airtable
    parseFormData() {
      /* eslint-disable camelcase */

      // translate the fields into airtable format
      const payloadFields = {
        email: this.form.email,
        speaker_bio: this.form.speaker_bio,
        topics: this.form.topics,
        languages: this.form.languages,
        photo_url: this.form.photo_url,
        name_en: this.form.name.en,
        name_ja: this.form.name.ja,
        job_title: this.form.job.title,
        company: this.form.job.company,
        city: this.form.location.city,
        location_id: [this.form.location.prefecture],
        linkedin_url: this.form.urls.linkedin,
        facebook_url: this.form.urls.facebook,
        twitter_url: this.form.urls.twitter,
        website_url: this.form.urls.website,
        submitter_name: this.form.submitter.name,
        submitter_email: this.form.submitter.email,
      };

      // Airtable expects an array of objects with the key `fields`
      return [{ fields: payloadFields }];
      /* eslint-enable camelcase */
    },
    afterSave(err, records) {
      if (err) {
        console.error(err);
      } else {
        console.log(`Successfully saved ${records.length} records!`);
      }
    },
    // delay validation so it's less aggressive
    delayTouch($v) {
      $v.$reset();
      if (touchMap.has($v)) {
        clearTimeout(touchMap.get($v));
      }
      touchMap.set($v, setTimeout($v.$touch, VALIDATION_DELAY));
    },
  },
};
</script>
