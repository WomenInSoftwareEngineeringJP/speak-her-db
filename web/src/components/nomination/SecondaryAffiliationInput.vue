<template>
  <v-row dense>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="secondary_title"
        :label="$t('nominateSpeaker.secondaryAffiliation.title')"
        :hint="$t('nominateSpeaker.secondaryAffiliation.hint')"
        persistent-hint
        outlined
        :value="value.secondary_title"
        :error-messages="secondaryTitleErrors"
        @input="updateAffiliation('secondary_title', $event)"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="secondary_affiliation"
        :value="value.secondary_affiliation"
        :label="$t('nominateSpeaker.secondaryAffiliation.organization')"
        outlined
        :error-messages="secondaryAffiliationErrors"
        @input="updateAffiliation('secondary_affiliation', $event)"
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
    secondaryTitleErrors: {
      type: Array,
      default: () => [],
    },
    secondaryAffiliationErrors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      affiliationFields: ['secondary_title', 'secondary_affiliation'],
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
