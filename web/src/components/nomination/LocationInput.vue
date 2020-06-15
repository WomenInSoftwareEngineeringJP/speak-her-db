<template>
  <v-row dense>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="city"
        label="City"
        outlined
        :value="value.city"
        @input="updateLocation('city', $event)"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-autocomplete
        ref="prefecture"
        label="Prefecture"
        :items="prefectures"
        :item-text="(e) => (e.get('prefecture'))"
        item-value="id"
        outlined
        :value="value.prefecture"
        @input="updateLocation('prefecture', $event)"
      />
    </v-col>
  </v-row>
</template>

<script>
import db from '@/plugins/airtable';

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
      prefectures: [],
      error: null,
    };
  },
  mounted() {
    this.getPrefectures();
  },
  methods: {
    getPrefectures() {
      db('Location')
        .select({
          view: 'All',
        })
        .firstPage((err, records) => {
          if (err) {
            this.error = err;
          } else {
            this.prefectures = records;
          }
        });
    },
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
