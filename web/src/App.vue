<template>
  <v-app>
    <v-content>
      <Nav/>
      <HelloWorld/>
      <HelloI18n/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HelloI18n from './components/HelloI18n.vue';
import Nav from './components/Nav.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    HelloI18n,
    Nav,
  },

  data: () => ({
    //
  }),
};
</script>
