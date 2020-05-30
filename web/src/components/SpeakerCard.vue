<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="2"
        >
          <v-img
            src="http://placekitten.com/150/150"
            max-height="150"
            contain
          />
        </v-col>
        <v-col
          cols="12"
          sm="10"
        >
          <card-header
            :title="speaker.name"
          />
          <v-row><span>{{ speaker.title }}</span></v-row>
          <v-row>
            {{ speaker.city }}, {{ speaker.prefecture }}
          </v-row>
          <v-row>
            {{ speaker.bio }}
          </v-row>

          <tag-box
            :tags="speaker.tags"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import CardHeader from './CardHeader.vue';
import TagBox from './TagBox.vue';

export default {
  components: {
    CardHeader,
    TagBox,
  },
  props: {
    speaker: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {

    };
  },
};
</script>
