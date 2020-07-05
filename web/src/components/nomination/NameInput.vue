<template>
  <v-row dense>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="english"
        :value="value.english"
        :error-messages="englishErrors"
        label="Name (English / Romaji)"
        outlined
        @input="updateName('english', $event)"
        @blur="$emit('touch-english')"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="japanese"
        :value="value.japanese"
        :error-messages="japaneseErrors"
        label="Name (Kanji / Kana)"
        outlined
        @input="updateName('japanese', $event)"
        @blur="$emit('touch-japanese')"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
    englishErrors: {
      type: Array,
      default: () => [],
    },
    japaneseErrors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      nameFields: ['english', 'japanese'],
    };
  },
  methods: {
    // Build the Name object by populating all the nameFields and latest values
    updateName(updatedField, updatedValue) {
      const name = {};
      this.nameFields.forEach((field) => {
        name[field] = updatedField === field ? updatedValue : this.$refs[field].value;
      });
      this.$emit('input', name);
      this.$emit(`touch-${updatedField}`);
    },
  },
};
</script>
