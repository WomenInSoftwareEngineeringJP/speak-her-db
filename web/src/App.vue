<template>
  <v-app>
    <toolbar
      :items="navigation"
      @click-menu="clickMenu"
    />
    <sidebar
      v-if="$vuetify.breakpoint.smAndDown"
      :show="showSidebar"
      :items="navigation"
      @close-drawer="showSidebar = false"
    />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',

  components: {
    Toolbar,
    Sidebar,
  },
  data: () => ({
    showSidebar: false,
  }),
  computed: {
    navigation() {
      return [
        {
          title: 'Home',
          icon: 'home',
          path: '/',
          hideInToolbar: true,
        },
        {
          title: 'About',
          icon: 'help',
          path: 'about',
        },
      ];
    },
  },
  methods: {
    clickMenu() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
