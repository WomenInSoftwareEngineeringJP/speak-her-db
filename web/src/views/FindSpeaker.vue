<template>
  <v-container>
    <search />
    <speaker-card />
  </v-container>
</template>

<script>
// @ is an alias to /src
import SpeakerCard from '@/components/SpeakerCard.vue';
import Search from '@/components/Search.vue';

export default {
  components: {
    Search,
    SpeakerCard,
  },
  data() {
    return {

    };
  },
};
</script>
