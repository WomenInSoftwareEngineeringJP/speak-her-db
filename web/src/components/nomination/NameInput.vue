<template>
  <v-row dense>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="en"
        :value="value.en"
        :error-messages="englishErrors"
        :label="$t('nominateSpeaker.nameEn')"
        outlined
        @input="updateName('en', $event)"
        @blur="$emit('touch-english')"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="ja"
        :value="value.ja"
        :error-messages="japaneseErrors"
        :label="$t('nominateSpeaker.nameJa')"
        outlined
        @input="updateName('ja', $event)"
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
      nameFields: ['en', 'ja'],
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
