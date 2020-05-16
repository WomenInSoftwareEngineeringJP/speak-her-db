<template>
  <v-select
    v-model='$i18n.locale'
    prepend-icon='fa-globe'
    class='locale-switcher'
  >
    <option value="en">English</option>
    <option value="ja">Japanese</option>
  </v-select>
</template>
