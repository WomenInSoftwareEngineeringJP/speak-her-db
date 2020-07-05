import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import FindSpeaker from '../views/FindSpeaker.vue';
import NominateSpeaker from '../views/NominateSpeaker.vue';
import NotFound404 from '../views/NotFound404.vue';

Vue.use(VueRouter);

// order matters!
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',

    component: About,
  },
  {
    path: '/find-speaker',
    name: 'Find a Speaker',
    component: FindSpeaker,
  },
  {
    path: '/nominate-speaker',
    name: 'Nominate a Speaker',
    component: NominateSpeaker,
  },
  {
    path: '/404',
    name: '404 Not Found',
    component: NotFound404,
  },
  {
    path: '*',
    beforeEnter() {
      window.location = '/404';
    },
  },
];

const router = new VueRouter({
  routes,
  mode: 'history', // makes the # go away
});

export default router;
