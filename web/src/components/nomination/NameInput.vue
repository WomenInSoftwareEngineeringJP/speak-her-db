<template>
  <v-row dense>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="english"
        :value="value.title"
        label="Name (English / Romaji)"
        outlined
        @input="updateName('english', $event)"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="japanese"
        :value="value.first"
        label="Name (Kanji / Kana)"
        outlined
        @input="updateName('japanese', $event)"
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
    },
  },
};
</script>
