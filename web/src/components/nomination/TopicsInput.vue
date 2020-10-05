<template>
  <v-row dense>
    <v-col>
      <v-combobox
        ref="topics"
        :label="$t('nominateSpeaker.topics.label')"
        :hint="$t('nominateSpeaker.topics.hint')"
        :items="topics"
        persistent-hint
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
import api from '@/services/api';

export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      topics: [],
      error: null,
    };
  },
  mounted() {
    api.getTopics(this.setTopics, this.setError);
  },
  methods: {
    setTopics(records) {
      this.topics = records.map((topic) => ({
        id: topic.id,
        text: topic.fields.name,
      }));
    },
    setError(err) {
      this.error = err;
    },
  },
};
</script>
