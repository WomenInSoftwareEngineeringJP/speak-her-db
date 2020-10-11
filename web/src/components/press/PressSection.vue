<template>
  <div>
    <v-row
      justify="center"
      class="mt-10 mb-6"
    >
      <h2>Press coverage</h2>
    </v-row>
    <press-carousel class="mb-10" />
  </div>
</template>

<script>
import PressCarousel from '@/components/press/PressCarousel.vue';

export default {
  components: {
    PressCarousel,
  },
};
</script>
