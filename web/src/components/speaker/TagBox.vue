<template>
  <v-row class="pa-0 ma-0 d-flex">
    <div
      v-for="tag in tags"
      :key="tag"
      fluid
      class="mr-3"
      align="center"
    >
      <v-chip
        :color="generateColor(tag)"
        label
        class="mb-2"
      >
        {{ tag }}
      </v-chip>
    </div>
  </v-row>
</template>

<script>
// Thank you https://coolors.co/ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff
// https://coolors.co/feebae-e4ffbb-b3fbdf-9eddff-afbbff-debcff-ffbad6
const softColors = ['#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#c1eedd',
  '#a0c4ff', '#bdb2ff', '#ffc6ff', '#feebae', '#e4ffbb', '#b3fbdf', '#9eddff',
  '#afbbff', '#ffbad6', '#a7ccff', '#c7bcff', '#ffbdae', '#b0e6ee', '#CDDCF0',
  '#f7b5c2', '#fbcdc3'];

export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      colorCache: {},
    };
  },
  methods: {
    generateColor(tag) {
      if (tag) {
        if (tag in this.colorCache) {
          return this.colorCache[tag];
        }
        let sum = 0;
        for (let i = 0; i < tag.length; i += 1) {
          sum += tag.charCodeAt(i);
        }
        const i = sum % softColors.length;
        const color = softColors[i];
        this.colorCache[tag] = color;
        return color;
      }
      return softColors[0];
    },
  },
};
</script>
