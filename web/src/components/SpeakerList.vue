<template>
  <v-container>
     <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Speaker List</h1>
      </v-col>
    </v-row>
    <v-row class="text-center"
      v-for="(speaker, i) in speakers"
      :key="i"
      justify="center"
    >
      <v-col cols="12" class="subheading mx-3">
        {{ speaker.get('Name') }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import db from '../plugins/airtable';

export default {
  name: 'SpeakerList',

  data: () => ({
    speakers: [],
    error: null,
  }),
  mounted() {
    this.getSpeakers();
  },
  methods: {
    getSpeakers() {
      db('People')
        .select({
          view: 'Alphabetical',
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
