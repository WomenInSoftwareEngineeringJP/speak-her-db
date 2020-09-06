<template>
  <v-card>
    <v-row
      class="px-8 py-2"
      align="stretch"
    >
      <v-col>
        <v-expansion-panels
          flat
          hover
          class="pa-0 ma-0"
        >
          <v-expansion-panel>
            <v-expansion-panel-header class="py-0 my-0">
              <v-col
                no-gutters
                class="pa-0 ma-0"
              >
                <card-header
                  :title="name"
                  :languages="languages"
                  :pronouns="speaker.get('pronouns')"
                  class="mr-5"
                  @contact-speaker="contactSpeaker()"
                />

                <v-row
                  class="my-1 mr-5"
                >
                  <span class="speaker-title">{{ jobTitle }}</span>
                  <v-spacer />
                  <span class="location">{{ prefecture }}</span>
                </v-row>
                <v-row class="my-1 mr-5">
                  <span class="speaker-title">{{ secondTitle }}</span>
                </v-row>
              </v-col>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="px-0 mx-0">
              {{ speaker.get('speaker_bio') }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <tag-box
          :tags="topics"
          class="mt-3"
        />
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
    secondTitle() {
      if (this.speaker.get('secondary_title') && this.speaker.get('secondary_affiliation')) {
        return `${this.speaker.get('secondary_title')} at ${this.speaker.get('secondary_affiliation')}`;
      }
      return this.speaker.get('secondary_title') || this.speaker.get('secondary_affiliation');
    },
    prefecture() {
      const locationId = this.speaker.fields.location_id[0];
      const location = this.prefectures.find((elem) => (elem.id === locationId));
      return location?.fields?.prefecture;
    },
    languages() {
      const languageIds = this.speaker.get('languages');
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
