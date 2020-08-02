<template>
  <v-row dense>
    <v-col>
      <v-combobox
        ref="topics"
        :label="$t('nominateSpeaker.topics.label')"
        :hint="$t('nominateSpeaker.topics.hint')"
        :items="topics"
        :item-text="$i18n.locale === 'ja' ? 'name_ja' : 'name_en'"
        item-value="id"
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
    this.$getTopics(this.setTopics, this.setError);
  },
  methods: {
    setTopics(records) {
      this.topics = records.map((topic) => ({
        id: topic.id,
        name_en: topic.get('name_en'),
        name_ja: topic.get('name_ja'),
      }));
    },
    setError(err) {
      this.error = err;
    },
  },
};
</script>
