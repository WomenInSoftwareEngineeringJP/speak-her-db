<template>
  <v-row class="pa-0 ma-0">
    <div
      v-for="tag in tags"
      :key="tag"
      fluid
      class="mr-2"
      align="end"
    >
      <v-chip
        :color="generateColor(tag)"
        label
      >
        {{ tag }}
      </v-chip>
    </div>
  </v-row>
</template>

<script>
// Thank you https://coolors.co/ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff
const softColors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff',
  '#a0c4ff', '#bdb2ff', '#ffc6ff'];

export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  methods: {
    generateColor(tag) {
      if (tag && tag.length > 0) {
        const i = tag.charCodeAt(0) % softColors.length;
        return softColors[i];
      }
      return softColors[0];
    },
  },
};
</script>
