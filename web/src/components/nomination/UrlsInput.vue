<template>
  <div>
    <v-row dense>
      <v-col
        cols="12"
        md="6"
        xs="12"
      >
        <v-text-field
          ref="linkedin"
          :value="value.linkedin"
          label="LinkedIn URL"
          outlined
          @input="updateURLs('linkedin', $event)"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        xs="12"
      >
        <v-text-field
          ref="facebook"
          :value="value.facebook"
          label="Facebook URL"
          outlined
          @input="updateURLs('facebook', $event)"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        cols="12"
        md="6"
        xs="12"
      >
        <v-text-field
          ref="twitter"
          :value="value.twitter"
          label="Twitter URL"
          outlined
          @input="updateURLs('twitter', $event)"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        xs="12"
      >
        <v-text-field
          ref="website"
          :value="value.website"
          label="Website URL"
          outlined
          @input="updateURLs('website', $event)"
        />
      </v-col>
    </v-row>
  </div>
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
      urlFields: ['linkedin', 'facebook', 'twitter', 'website'],
    };
  },
  methods: {
    // Build the URLs object by populating all the urlFields and latest values
    updateURLs(updatedField, updatedValue) {
      const urls = {};
      this.urlFields.forEach((field) => {
        urls[field] = updatedField === field ? updatedValue : this.$refs[field].value;
      });
      this.$emit('input', urls);
    },
  },
};
</script>
