<template>
  <v-row dense>
    <v-col>
      <v-text-field
        ref="city"
        label="City"
        outlined
        :value="value.city"
        @input="updateLocation('city', $event)"
      />
    </v-col>
    <v-col>
      <v-text-field
        ref="prefecture"
        label="Prefecture"
        outlined
        :value="value.prefecture"
        @input="updateLocation('prefecture', $event)"
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
      locationFields: ['city', 'prefecture'],
    };
  },
  methods: {
    // Build the Location object by populating all the nameFields and latest values
    updateLocation(updatedField, updatedValue) {
      const location = {};
      this.locationFields.forEach((field) => {
        location[field] = updatedField === field ? updatedValue : this.$refs[field].value;
      });
      this.$emit('input', location);
    },
  },
};
</script>
