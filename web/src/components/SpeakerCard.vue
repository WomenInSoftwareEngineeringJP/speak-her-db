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
              :color="tagColor(tag)"
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
export default {
  props: {
    speaker: {
      type: Object,
      required: true,
    },
  },
  methods: {
    tagColor(tag) {
      switch (tag[0]) {
        case 'S':
          return '#ffadad';
        default:
          return '#a0c4ff';
      }
    },
  },
};
</script>
