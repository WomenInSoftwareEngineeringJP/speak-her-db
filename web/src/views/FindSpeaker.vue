<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col lg="10">
        <search />
        <div
          v-for="speaker in speakers"
          :key="speaker.name"
        >
          <speaker-card
            :speaker="speaker"
            class="mb-5"
          />
        </div>
      </v-col>
    </v-row>
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
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          tags: ['STEM', 'Railway'],
        },
        {
          name: 'Jesse Faden',
          title: 'Director, Federal Bureau of Control',
          city: 'Hachioji',
          prefecture: 'Tokyo',
          bio: 'Prime Candidate Seven',
          tags: ['STEM', 'Mentor'],
        },
        {
          name: 'Nasha Agumanu',
          title: 'Professor at UNU Tokyo',
          city: 'Shibuya',
          prefecture: 'Tokyo',
          bio: 'Tenured professor in Environmental Studies',
          tags: ['STEM', 'Research'],
        },
      ],
    };
  },
};
</script>
