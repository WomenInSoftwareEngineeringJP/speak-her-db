<template>
<<<<<<< HEAD
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
  <div>
    <v-parallax
      dark
      src="../assets/background.png"
      height="800"
    >
      <v-row
        no-gutters
        align="stretch"
      >
        <v-col
          cols="12"
          md="6"
          xs="12"
        >
          <illustration />
        </v-col>
        <v-col
          cols="12"
          md="6"
          xs="12"
          align="stretch"
        >
          <call-to-action />
        </v-col>
      </v-row>
    </v-parallax>
>>>>>>> master
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
