<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="2"
        >
          <v-img
            src="http://placekitten.com/200/300"
          />
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-row><h2>{{ speaker.name }}</h2></v-row>
          <v-row><span>{{ speaker.title }}</span></v-row>
          <v-row>
            {{ speaker.city }}, {{ speaker.prefecture }}
          </v-row>
          <div
            v-for="tag in speaker.tags"
            :key="tag"
          >
            <v-chip
              :color="generateColor(tag)"
              label
              small
            >
              {{ tag }}
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

// Thank you https://coolors.co/ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff
const softColors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff',
  '#a0c4ff', '#bdb2ff', '#ffc6ff'];

export default {
  props: {
    speaker: {
      type: Object,
      required: true,
    },
  },
  methods: {
    generateColor(tag) {
      const i = tag.charCodeAt(0) % softColors.length;
      return softColors[i];
    },
  },
};
</script>
