<template>
  <v-row dense>
    <v-col>
      <v-autocomplete
        ref="topics"
        label="Topics"
        :items="topics"
        outlined
        multiple
        chips
        deletable-chips
        :value="value.topics"
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
      topics: ['Web Development', 'Blockchain', 'Entrepreneurship', 'Management'],
      error: null,
    };
  },
  mounted() {
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
