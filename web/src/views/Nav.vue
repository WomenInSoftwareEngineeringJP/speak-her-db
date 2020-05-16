<template>
  <v-app-bar>
    <v-container fluid>
      <v-row align-content='start'>
        <v-col>
          <v-avatar>
            <img alt='Vue logo' src='../assets/logo.png' />
          </v-avatar>
        </v-col>
        <v-col>
          <LocaleSwitcher />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

</template>

<style>
#nav {
  text-align: left;
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
