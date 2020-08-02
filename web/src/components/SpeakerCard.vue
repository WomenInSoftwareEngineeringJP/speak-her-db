<template>
  <v-card>
    <v-row
      class="px-8 py-2"
      align="stretch"
    >
      <v-col>
        <card-header
          :title="name"
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
          {{ otherInfo }}
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
    name() {
      try {
        return this.speaker.get('name_en') || '';
      } catch (e) {
        return '';
      }
    },
    otherInfo() {
      try {
        return this.speaker.get('other_info');
      } catch (e) {
        return '';
      }
    },
  },
  mounted() {
    this.$getSpeakerTopics(this.speaker.id, this.setTopics, this.setError);
  },
  methods: {
    setTopics(records) {
      this.topics = records.map((topic) => ({
        id: topic.id,
        text: topic.get('name'),
      }));
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
