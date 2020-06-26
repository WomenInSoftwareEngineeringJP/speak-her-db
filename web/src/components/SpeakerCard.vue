<template>
  <v-card>
    <v-row
      class="px-8 py-2"
      align="stretch"
    >
      <v-col>
        <card-header
          :title="speaker.name"
          @contact-speaker="contactSpeaker()"
        />
        <v-row
          class="my-1"
        >
          <span class="speaker-title">{{ jobTitle }}</span>
          <v-spacer />
          <span class="location">{{ speaker.prefecture }}</span>
        </v-row>
        <v-row>
          {{ speaker.other_info }}
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
  },
  data: () => ({
    topics: [],
  }),
  computed: {
    jobTitle() {
      if (this.speaker.job_title && this.speaker.company) {
        return `${this.speaker.job_title} at ${this.speaker.company}`;
      }
      return this.speaker.job_title || this.speaker.company;
    },
  },
  mounted() {
    this.getTopics();
  },
  methods: {
    getTopics() {
      this.topics = this.speaker.topics.split(', ');
    },
    contactSpeaker() {
      bus.$emit('contact-speaker', this.speaker);
    },
  },
};
</script>
