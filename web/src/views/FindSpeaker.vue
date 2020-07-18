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
        <v-row>
          <h2 class="mx-2 mb-2">
            Find a speaker
          </h2>
        </v-row>
        <search v-if="false" />
        <div
          v-for="speaker in speakers"
          :key="speaker.id"
        >
          <speaker-card
            :speaker="speaker"
            :prefectures="prefectures"
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

export default {
  components: {
    ContactDialog,
    ContactResult,
    Search,
    SpeakerCard,
  },
  data: () => ({
    speakers: [],
    prefectures: [],
    error: null,
    selectedSpeaker: {},
    showDialog: false,
    showSuccess: false,
  }),
  mounted() {
    this.$getLocations(this.setPrefectures, this.setError);
    this.getSpeakers();

    bus.$on('contact-speaker', (speaker) => { this.selectedSpeaker = speaker; this.showDialog = true; });
  },
  beforeDestroy() {
    bus.$off('contact-speaker');
  },
  methods: {
    setPrefectures(records) {
      this.prefectures = records;
    },
    setError(err) {
      this.error = err;
    },
    getSpeakers() {
      this.$db('People')
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
