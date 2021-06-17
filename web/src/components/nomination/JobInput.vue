<template>
  <v-row dense>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="title"
        :label="$t('nominateSpeaker.job.title')"
        :hint="$t('nominateSpeaker.job.hint')"
        persistent-hint
        outlined
        :value="value.title"
        :error-messages="jobTitleErrors"
        @input="updateJob('title', $event)"
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
        :label="$t('nominateSpeaker.job.company')"
        outlined
        :error-messages="companyErrors"
        @input="updateJob('company', $event)"
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
    jobTitleErrors: {
      type: Array,
      default: () => [],
    },
    companyErrors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      jobFields: ['title', 'company'],
    };
  },
  methods: {
    // Build the Job object by populating all the nameFields and latest values
    updateJob(updatedField, updatedValue) {
      const job = {};
      this.jobFields.forEach((field) => {
        job[field] = updatedField === field ? updatedValue : this.$refs[field].value;
      });
      this.$emit('input', job);
    },
  },
};
</script>
