<template>
  <div>
    <div
      class="hero pa-3"
    >
      <v-row
        no-gutters
        align="stretch"
      >
        <v-col
          class="hero-illustration d-md-block"
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
    </div>
    <find-speaker />
  </div>
</template>

<script>
import Illustration from '@/components/hero/Illustration.vue';
import CallToAction from '@/components/hero/CallToAction.vue';
import FindSpeaker from '@/views/FindSpeaker.vue';

export default {
  name: 'Home',
  components: {
    Illustration,
    CallToAction,
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
<style>
.hero {
  background-image: url('../assets/background.png');
  background-size: cover;
}
.hero-illustration {
  display: none;
}
</style>
