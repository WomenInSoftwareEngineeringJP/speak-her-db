<template>
  <v-app>
    <toolbar
      :items="navigation"
      @click-hamburger="clickHamburger"
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
  computed: {
    navigation() {
      return [
        {
          title: "Home",
          icon: "home",
          path: "/",
          hideInToolbar: true,
        },
        {
          title: "About",
          icon: "help",
          path: "about"
        }
      ];
    }
  },
  data: () => ({
    showSidebar: false,
  }),
  methods: {
    clickHamburger() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
