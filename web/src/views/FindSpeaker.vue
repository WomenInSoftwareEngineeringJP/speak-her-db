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
          title: 'Lead Researcher at Tokyu Railways',
          city: 'Yokohama',
          prefecture: 'Kanagawa',
          tags: ['STEM', 'Railway'],
        },
        {
          name: 'Jesse Faden',
          title: 'Director, Federal Bureau of Control',
          city: 'Hachioji',
          prefecture: 'Tokyo',
          tags: ['STEM', 'Mentor'],
        },
        {
          name: 'Nasha Agumanu',
          title: 'Professor at UNU Tokyo',
          city: 'Shibuya',
          prefecture: 'Tokyo',
          tags: ['STEM', 'Research'],
        },
      ],
    };
  },
};
</script>
