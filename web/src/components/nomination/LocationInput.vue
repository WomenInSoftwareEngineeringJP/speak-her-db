<template>
  <v-row dense>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="city"
        :label="$t('nominateSpeaker.city')"
        outlined
        :error-messages="cityErrors"
        :value="value.city"
        @input="updateLocation('city', $event)"
        @blur="$emit('touch-city')"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-autocomplete
        ref="prefecture"
        :label="$t('nominateSpeaker.prefecture')"
        :error-messages="prefectureErrors"
        :items="prefectures"
        :item-text="(e) => (e.get('prefecture'))"
        item-value="id"
        outlined
        :value="value.prefecture"
        @input="updateLocation('prefecture', $event)"
        @blur="$emit('touch-prefecture')"
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
    cityErrors: {
      type: Array,
      default: () => [],
    },
    prefectureErrors: {
      type: Array,
      default: () => [],
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
    this.$getLocations(this.setPrefectures, this.setError);
  },
  methods: {
    setPrefectures(records) {
      this.prefectures = records;
    },
    setError(err) {
      this.error = err;
    },
    // Build the Location object by populating all the nameFields and latest values
    updateLocation(updatedField, updatedValue) {
      const location = {};
      this.locationFields.forEach((field) => {
        location[field] = updatedField === field ? updatedValue : this.$refs[field].value;
      });
      this.$emit('input', location);
      this.$emit(`touch-${updatedField}`);
    },
  },
};
</script>
