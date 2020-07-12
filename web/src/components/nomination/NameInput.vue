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
        label="Name (English / Romaji)"
        outlined
        @input="updateName('en', $event)"
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
        label="Name (Kanji / Kana)"
        outlined
        @input="updateName('ja', $event)"
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
    },
  },
};
</script>
