<template>
  <v-card>
    <v-row
      class="px-8 py-2"
      align="stretch"
    >
      <v-col>
        <card-header
          :title="name"
          :languages="languages"
          @contact-speaker="contactSpeaker()"
        />
        <v-row
          class="my-1"
        >
          <span class="speaker-title">{{ jobTitle }}</span>
          <v-spacer />
          <span class="location">{{ prefecture }}</span>
        </v-row>
        <v-row>
          <tag-box
            :tags="topics"
            class="mt-3"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardHeader from './CardHeader.vue';
import TagBox from './TagBox.vue';

export default {
  components: {
    CardHeader,
    TagBox,
  },
  props: {
    speaker: {
      type: Object,
      required: true,
    },
    prefectures: {
      type: Array,
      required: true,
    },
    languageList: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    topics: [],
  }),
  computed: {
    jobTitle() {
      if (this.speaker.get('job_title') && this.speaker.get('company')) {
        return `${this.speaker.get('job_title')} at ${this.speaker.get('company')}`;
      }
      return this.speaker.get('job_title') || this.speaker.get('company');
    },
    prefecture() {
      const locationId = this.speaker.fields.location_id[0];
      const location = this.prefectures.find((elem) => (elem.id === locationId));
      return location?.fields?.prefecture;
    },
    languages() {
      const languageIds = this.speaker.get('languages2');
      return this.languageList.filter((language) => languageIds.includes(language.id));
    },
    name() {
      try {
        return this.speaker.get('name_en') || '';
      } catch (e) {
        return '';
      }
    },
    // TODO: to add this to the card we need to decide what to do with long entries
    speakerBio() {
      try {
        return this.speaker.get('speaker_bio');
      } catch (e) {
        return '';
      }
    },
  },
  created() {
    this.$getTopics(this.setTopics, this.setError);
  },
  methods: {
    setTopics(records) {
      const tKeys = this.speaker.get('topics');
      this.topics = [];

      for (let i = 0; i < tKeys.length; i += 1) {
        const topic = records.find((elem) => (elem.id === tKeys[i]));
        this.topics.push(topic.get('name'));
      }
    },
    setError(err) {
      this.error = err;
    },
    contactSpeaker() {
      bus.$emit('contact-speaker', this.speaker);
    },
  },
};
</script>
