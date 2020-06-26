<template>
  <v-container>
    <contact-dialogue
      :speaker="selectedSpeaker"
      @close="selectedSpeaker = {}"
    />
    <v-row
      justify="center"
      no-gutters
    >
      <v-col lg="10">
        <search />
        <div
          v-for="speaker in speakers"
          :key="speaker.id"
        >
          <speaker-card
            :speaker="speaker.fields"
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
import ContactDialogue from '@/components/contact/ContactDialogue.vue';

import db from '../plugins/airtable';

export default {
  components: {
    ContactDialogue,
    Search,
    SpeakerCard,
  },
  data: () => ({
    speakers: [],
    error: null,
    selectedSpeaker: {},
  }),
  mounted() {
    this.getSpeakers();

    bus.$on('contact-speaker', (speaker) => { this.selectedSpeaker = speaker; });
  },
  beforeDestroy() {
    bus.$off('contact-speaker');
  },
  methods: {
    getSpeakers() {
      db('People')
        .select({
          view: 'Published',
        })
        .firstPage((err, records) => {
          if (err) {
            this.error = err;
          } else {
            this.speakers = records;
          }
        });
    },
  },
};
</script>
