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
          {{ speaker.name }}
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
};
</script>
