<template>
  <v-row class="pa-0 ma-0 d-flex">
    <div
      v-for="tag in tags"
      :key="tag.name"
      fluid
      class="mr-3"
      align="center"
    >
      <v-chip
        :color="generateColor(tag.name)"
        label
        class="mb-2"
      >
        {{ localizedTag(tag) }}
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
    localizedTag(tag) {
      if (this.$i18n.locale === 'ja' && tag.name_ja && tag.name_ja !== '') {
        return tag.name_ja;
      }
      return tag.name;
    },
    generateColor(name) {
      if (name) {
        if (name in this.colorCache) {
          return this.colorCache[name];
        }
        let sum = 0;
        for (let i = 0; i < name.length; i += 1) {
          sum += name.charCodeAt(i);
        }
        const i = sum % softColors.length;
        const color = softColors[i];
        this.colorCache[name] = color;
        return color;
      }
      return softColors[0];
    },
  },
};
</script>
