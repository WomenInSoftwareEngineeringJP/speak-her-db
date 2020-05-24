<template>
  <div class="home">
    <v-parallax
      dark
      src="../assets/background.png"
      height="600"
    >
      <v-row no-gutters>
        <v-col>
          <illustration />
        </v-col>
        <v-col>
          <call-to-action />
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
import Illustration from '@/components/hero/Illustration.vue';
import CallToAction from '@/components/hero/CallToAction.vue';

export default {
  name: 'Home',
  components: {
    Illustration,
    CallToAction,
  },
  data() {
    return {

    };
  },
  computed: {
  },
};
</script>
