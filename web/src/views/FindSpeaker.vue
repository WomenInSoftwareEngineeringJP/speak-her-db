<template>
  <v-container>
    <contact-dialog
      :speaker="selectedSpeaker"
      :show="showDialog"
      @close="showDialog=false"
      @submit="showDialog= false; showSuccess = true"
    />
    <contact-result
      :show="showSuccess"
      :name="selectedSpeaker.name || ''"
      @close="showSuccess = false"
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
import ContactDialog from '@/components/contact/ContactDialog.vue';
import ContactResult from '@/components/contact/ContactResult.vue';

import db from '../plugins/airtable';

export default {
  components: {
    ContactDialog,
    ContactResult,
    Search,
    SpeakerCard,
  },
  data: () => ({
    speakers: [],
    error: null,
    selectedSpeaker: {},
    showDialog: false,
    showSuccess: false,
  }),
  mounted() {
    this.getSpeakers();

    bus.$on('contact-speaker', (speaker) => { this.selectedSpeaker = speaker; this.showDialog = true; });
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
