<template>
  <v-container>
    <search />
    <div
      v-for="speaker in speakers"
      :key="speaker"
    >
      <speaker-card
        :speaker="speaker"
        class="mb-5"
      />
    </div>
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
      speakers: [
        {
          name: 'Kimiko Shibuya',
          city: 'Yokohama',
        },
        {
          name: 'Jesse Faden',
          city: 'Hachioji',
        },
        {
          name: 'Nasha Agumanu',
          city: 'Tokyo',
        },
      ],
    };
  },
};
</script>
