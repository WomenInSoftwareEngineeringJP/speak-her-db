<template>
  <v-container fluid>
    <v-row justify="space-around" class="mb-2">
      <span class="locale-switcher">
        <v-icon>fas fa-globe</v-icon>
         {{$i18n.locale}}
      </span>
    </v-row>
  </v-container>
  <!-- <div class="locale-switcher">🌐 {{$i18n.locale}}</div> -->
</template>
