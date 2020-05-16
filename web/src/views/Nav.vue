<template>
  <v-app-bar id="nav">
    <img alt='Vue logo' src='../assets/logo.png' />
    <LocaleSwitcher />
  </v-app-bar>

</template>

<style>
#nav {
  /* display: flex; */
  /* align-items: center; */
  text-align: left;
  /* padding: 1rem; */
  color: #42b983;
  background-color: #3d536a;
}
#nav img {
  margin-right: 1rem;
  max-height: 1rem;
}
#nav a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
</style>

<script>

import LocaleSwitcher from '@/components/LocaleSwitcher.vue';

export default {
  name: 'Nav',
  components: { LocaleSwitcher },
};
</script>
