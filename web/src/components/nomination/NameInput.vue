<template>
  <v-row dense>
    <v-col
      cols="12"
      md="3"
      xs="12"
    >
      <v-text-field
        ref="title"
        :value="value.title"
        label="Title"
        outlined
        @input="updateName('title', $event)"
      />
    </v-col>
    <v-col
      cols="12"
      md="3"
      xs="12"
    >
      <v-text-field
        ref="first"
        :value="value.first"
        label="First Name"
        outlined
        @input="updateName('first', $event)"
      />
    </v-col>
    <v-col
      cols="12"
      md="3"
      xs="12"
    >
      <v-text-field
        ref="middle"
        :value="value.middle"
        label="Middle Name"
        outlined
        @input="updateName('middle', $event)"
      />
    </v-col>
    <v-col
      cols="12"
      md="3"
      xs="12"
    >
      <v-text-field
        ref="last"
        :value="value.last"
        label="Last Name"
        outlined
        @input="updateName('last', $event)"
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
      nameFields: ['title', 'first', 'middle', 'last'],
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
