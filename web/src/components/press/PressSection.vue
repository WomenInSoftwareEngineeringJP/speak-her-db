<template>
  <v-parallax
    height="500"
    dark
    src="../../assets/background.svg"
    class="mb-10"
  >
    <v-row
      justify="center"
      align="center"
      class="mt-10 mb-6"
    >
      <h2 class="dark-section-title">
        {{ $t('press.title') }}
      </h2>
    </v-row>
    <press-carousel />
  </v-parallax>
</template>

<script>
import PressCarousel from '@/components/press/PressCarousel.vue';

export default {
  components: {
    PressCarousel,
  },
};
</script>
