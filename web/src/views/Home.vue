<template>
  <div>
    <img
      src="../assets/background.svg"
      height="100%"
    >
    <v-row
      no-gutters
      align="stretch"
    >
      <v-col
        cols="12"
        md="6"
        xs="12"
      >
        <illustration />
      </v-col>
      <v-col
        cols="12"
        md="6"
        xs="12"
        align="stretch"
      >
        <call-to-action />
      </v-col>
    </v-row>
    <br>
    <Summary id="summary" />
    <press-section />
    <find-speaker id="find-speaker" />
  </div>
</template>

<script>
import Illustration from '@/components/hero/Illustration.vue';
import CallToAction from '@/components/hero/CallToAction.vue';
import Summary from '@/components/about/Summary.vue';
import FindSpeaker from '@/views/FindSpeaker.vue';
import PressSection from '@/components/press/PressSection.vue';

export default {
  name: 'Home',
  components: {
    Illustration,
    CallToAction,
    PressSection,
    Summary,
    FindSpeaker,
  },
  data() {
    return {

    };
  },
  computed: {
  },
};
</script>
