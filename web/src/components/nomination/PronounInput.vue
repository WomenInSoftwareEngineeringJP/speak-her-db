<template>
  <v-col
    cols="12"
    md="6"
    xs="12"
  >
    <v-combobox
      ref="pronouns"
      :label="$t('nominateSpeaker.pronouns')"
      :items="pronouns"
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
      type: Object,
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
      console.log(records)
      this.pronouns = records.map((pronoun) => ({
        id: pronoun.id,
        text: pronoun.get('value'),
      }));
    },
    setError(err) {
      this.error = err;
    },
  },
};
</script>
