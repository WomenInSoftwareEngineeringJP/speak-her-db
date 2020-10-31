<template>
  <v-sheet
    color="#41278C"
    height="100%"
    class="pt-1"
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
    <press-carousel class="mb-10" />
  </v-sheet>
</template>

<script>
import PressCarousel from '@/components/press/PressCarousel.vue';

export default {
  components: {
    PressCarousel,
  },
};
</script>
