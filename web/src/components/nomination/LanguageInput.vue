<template>
  <v-col
    cols="12"
    md="6"
    xs="12"
  >
    <v-combobox
      ref="languages"
      :label="$t('nominateSpeaker.languages')"
      :items="languages"
      multiple
      outlined
      :value="value"
      @input="$emit('input', $event)"
    />
  </v-col>
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
      languages: [],
      error: null,
    };
  },
  mounted() {
    this.$getLanguages(this.setLanguages, this.setError);
  },
  methods: {
    setLanguages(records) {
      this.languages = records.map((language) => ({
        id: language.id,
        text: language.get('name'),
      }));
    },
    setError(err) {
      this.error = err;
    },
  },
};
</script>
