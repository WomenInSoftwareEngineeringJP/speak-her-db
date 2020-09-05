<template>
  <v-col
    cols="12"
    md="6"
    xs="12"
  >
    <v-combobox
      ref="pronouns"
      :label="$t('nominateSpeaker.pronouns.label')"
      :hint="$t('nominateSpeaker.pronouns.hint')"
      :items="pronouns"
      persistent-hint
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
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pronouns: [],
      error: null,
    };
  },
  mounted() {
    this.$getPronouns(this.setPronouns, this.setError);
  },
  methods: {
    setPronouns(records) {
      this.pronouns = records.map((pronoun) => (pronoun.get('value')));
    },
    setError(err) {
      this.error = err;
    },
  },
};
</script>
