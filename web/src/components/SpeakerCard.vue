<template>
  <v-card>
    <v-row
      class="px-8 py-2"
      align="stretch"
    >
      <v-col>
        <card-header
          :title="speaker.name"
        />
        <v-row
          class="my-1"
        >
          <span class="speaker-title">{{ jobTitle }}</span>
          <v-spacer />
          <span class="location">{{ prefecture }}</span>
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
    prefectures: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
  }),
  computed: {
    jobTitle() {
      if (this.speaker.job_title && this.speaker.company) {
        return `${this.speaker.job_title} at ${this.speaker.company}`;
      }
      return this.speaker.job_title || this.speaker.company;
    },
    prefecture() {
      const obj = this.prefectures.find((elem) => (elem.id === this.speaker.prefecture_id[0]));
      return obj.fields.prefecture;
    },
    topics() {
      return this.speaker.topics.split(', ');
    },
  },
};
</script>
