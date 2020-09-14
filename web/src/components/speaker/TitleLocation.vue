<template>
  <div>
    <v-row class="mb-2">
      <span class="speaker-title">{{ jobTitle }}</span>
    </v-row>
    <v-row
      v-if="secondTitle !== ''"
      class="mb-2"
    >
      <span class="speaker-title">{{ secondTitle }}</span>
    </v-row>
    <v-row class="mb-2">
      <span class="location">{{ prefecture }}</span>
    </v-row>
  </div>
</template>

<script>
export default {
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
  },
};
</script>
