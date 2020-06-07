<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 font-weight-thin homepage-title mb-4">
          SpeakHer
        </h1>
        <h4 class="subheading">
          Your online resource for finding female speakers in Japan
        </h4>
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
