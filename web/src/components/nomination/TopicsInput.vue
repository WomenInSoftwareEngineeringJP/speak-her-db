<template>
  <v-row dense>
    <v-col>
      <v-autocomplete
        ref="topics"
        :label="$t('nominateSpeaker.topics')"
        :items="topics"
        item-text="en"
        multiple
        chips
        deletable-chips
        outlined
        :value="value"
        @input="$emit('input', $event)"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      topics: [
        { en: 'STEM' },
        { en: 'Business' },
        { en: 'Fintech' },
        { en: 'Art' },
      ],
      error: null,
    };
  },
  mounted() {
    // TODO: fetch topics from database
    // this.$getTopics(this.setTopics, this.setError);
  },
  methods: {
    setTopics(records) {
      this.topics = records;
    },
    setError(err) {
      this.error = err;
    },
    addTopic() {
      // TODO: add new topics
    },
  },
};
</script>
