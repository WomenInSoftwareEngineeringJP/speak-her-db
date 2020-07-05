<template>
  <v-container>
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
        <search />
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

export default {
  components: {
    Search,
    SpeakerCard,
  },
  data: () => ({
    speakers: [],
    prefectures: [],
    error: null,
  }),
  mounted() {
    this.$getLocations(this.setPrefectures, this.setError);
    this.getSpeakers();
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
