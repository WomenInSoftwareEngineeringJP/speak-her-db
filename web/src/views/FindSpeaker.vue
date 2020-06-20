<template>
  <v-container>
    <v-row
      class="pt-5"
      justify="center"
      no-gutters
    >
      <v-col lg="10">
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
import db from '@/plugins/airtable';

export default {
  components: {
    SpeakerCard,
  },
  data: () => ({
    speakers: [],
    prefectures: [],
    error: null,
  }),
  mounted() {
    this.getPrefectures();
    this.getSpeakers();
  },
  methods: {
    getPrefectures() {
      db('Location')
        .select({
          view: 'All',
        })
        .firstPage((err, records) => {
          if (err) {
            this.error = err;
          } else {
            this.prefectures = records;
          }
        });
    },
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
