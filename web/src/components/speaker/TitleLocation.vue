<template>
  <div>
    <!-- desktop view -->
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-row class="my-1 mr-5">
        <span class="speaker-title">{{ jobTitle }}</span>
        <v-spacer />
        <span class="location">{{ prefecture }}</span>
      </v-row>
      <v-row class="my-1 mr-5">
        <span class="speaker-title">{{ secondTitle }}</span>
      </v-row>
    </div>
    <!-- mobile view-->
    <div v-else>
      <v-row class="my-2 mr-5">
        <span class="speaker-title">{{ jobTitle }}</span>
      </v-row>
      <v-row class="my-2 mr-5">
        <span class="speaker-title">{{ secondTitle }}</span>
      </v-row>
      <v-row class="my-2 mr-5 mt-2">
        <span class="location">{{ prefecture }}</span>
      </v-row>
    </div>
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
