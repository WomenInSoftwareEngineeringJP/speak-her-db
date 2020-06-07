<template>
  <v-row dense>
    <v-col dense>
      <v-text-field
        ref="name"
        label="Submitter Name"
        outlined
        :value="value.title"
        @input="updateSubmitter('name', $event)"
      />
    </v-col>
    <v-col>
      <v-text-field
        ref="email"
        label="Submitter Email"
        outlined
        :value="value.title"
        @input="updateSubmitter('email', $event)"
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
    },
  },
};
</script>
