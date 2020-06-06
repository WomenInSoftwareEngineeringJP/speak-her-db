<template>
  <v-row>
    <h2>{{ title }}</h2>
    <v-spacer />
    <v-btn
      icon
      class="ml-1"
    >
      <v-icon>star</v-icon>
    </v-btn>
    <v-btn
      icon
      class="ml-1"
    >
      <v-icon>email</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
