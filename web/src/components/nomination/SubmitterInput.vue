<template>
  <v-row dense>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="name"
        label="Submitter Name"
        :error-messages="nameErrors"
        outlined
        :value="value.name"
        @input="updateSubmitter('name', $event)"
        @blur="$emit('touch-name')"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="email"
        label="Submitter Email"
        :error-messages="emailErrors"
        outlined
        :value="value.email"
        @input="updateSubmitter('email', $event)"
        @blur="$emit('touch-email')"
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
    nameErrors: {
      type: Array,
      default: () => [],
    },
    emailErrors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      submitterFields: ['name', 'email'],
    };
  },
  methods: {
    // Build the Submitter object by populating all the submitterFields and latest values
    updateSubmitter(updatedField, updatedValue) {
      const submitter = {};
      this.submitterFields.forEach((field) => {
        submitter[field] = updatedField === field ? updatedValue : this.$refs[field].value;
      });
      this.$emit('input', submitter);
      this.$emit(`touch-${updatedField}`);
    },
  },
};
</script>
