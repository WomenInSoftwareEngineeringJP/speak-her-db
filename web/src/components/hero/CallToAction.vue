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
            {{ $t('hero.title') }}
          </h1>
          <h2 class="homepage-subtitle mb-4">
            {{ $t('hero.subtitle') }}
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
          @click="alert('this used to do something')"
        >
          {{ $t('nav.findSpeaker') }}
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
          {{ $t('nav.nominateSpeaker') }}
        </v-btn>
      </v-row>
      <v-row
        v-if="true"
        class="spacer"
      />
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      duration: 400,
      offset: -50,
      easing: 'easeInOutCubic',
    };
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      };
    },
  },
};
</script>
