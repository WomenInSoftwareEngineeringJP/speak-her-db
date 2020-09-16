<template>
  <v-row dense>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="title"
        :label="$t('nominateSpeaker.affiliation.title')"
        :hint="$t('nominateSpeaker.affiliation.hint')"
        persistent-hint
        outlined
        :value="value.title"
        @input="updateAffiliation('title', $event)"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="company"
        :value="value.company"
        :label="$t('nominateSpeaker.affiliation.company')"
        outlined
        @input="updateAffiliation('company', $event)"
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
      affiliationFields: ['title', 'company'],
    };
  },
  methods: {
    // Build the Affiliation object by populating all the nameFields and latest values
    updateAffiliation(updatedField, updatedValue) {
      const affiliation = {};
      this.affiliationFields.forEach((field) => {
        affiliation[field] = updatedField === field ? updatedValue : this.$refs[field].value;
      });
      this.$emit('input', affiliation);
    },
  },
};
</script>
