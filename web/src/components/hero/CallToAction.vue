<template>
  <v-container
    fluid
    fill-height
  >
    <div class="align-md-center">
      <v-row>
        <v-col
          class="text-center"
        >
          <h1 class="homepage-title mb-2">
            SpeakHer
          </h1>
          <h2 class="homepage-subtitle mb-4">
            Your online resource for finding female speakers in Japan
          </h2>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          outlined
          dark
          class="ma-2"
          href="find-speaker"
        >
          Find a speaker
        </v-btn>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          outlined
          dark
          class="ma-4"
          href="nominate-speaker"
        >
          Nominate a speaker
        </v-btn>
      </v-row>
      <v-row
        v-if="$vuetify.breakpoint.mdAndUp"
        class="spacer"
      />
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>
