<template>
  <v-container>
    <h1>Find a speaker</h1>
    <speaker-list />
  </v-container>
</template>

<script>
// @ is an alias to /src
import SpeakerList from '@/components/SpeakerList.vue';

export default {
  components: {
    SpeakerList,
  },
  data() {
    return {

    };
  },
};
</script>
