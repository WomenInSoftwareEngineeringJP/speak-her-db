<template>
  <div class="home">
    <v-parallax
      dark
      src="../assets/background.png"
      height="600"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1>
            SpeakHer
          </h1>
          <h4>
            Your online resource for finding female speakers in Japan
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  },
  data() {
    return {

    };
  },
  computed: {
  },
};
</script>
