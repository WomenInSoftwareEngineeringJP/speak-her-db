<template>
  <v-card>
    <v-row
      class="px-8 py-2"
      align="stretch"
    >
      <v-col>
        <card-header
          :title="speaker.name"
        />
        <v-row
          class="my-1"
        >
          <span class="speaker-title">{{ speaker.title }}</span>
          <v-spacer />
          <span class="location">{{ speaker.city }}, {{ speaker.prefecture }}</span>
        </v-row>
        <v-row>
          {{ speaker.bio }}
        </v-row>

        <v-row>
          <tag-box
            :tags="speaker.tags"
            class="mt-3"
          />
        </v-row>
      </v-col>
    </v-row>
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
