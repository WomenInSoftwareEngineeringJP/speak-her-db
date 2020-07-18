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
          :error-messages="linkedinErrors"
          label="LinkedIn URL"
          outlined
          @input="updateURLs('linkedin', $event)"
          @blur="$emit('touch-linkedin')"
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
          :error-messages="fbErrors"
          label="Facebook URL"
          outlined
          @input="updateURLs('facebook', $event)"
          @blur="$emit('touch-fb')"
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
          :error-messages="twitterErrors"
          label="Twitter URL"
          outlined
          @input="updateURLs('twitter', $event)"
          @blur="$emit('touch-twitter')"
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
          :error-messages="websiteErrors"
          label="Website URL"
          outlined
          @input="updateURLs('website', $event)"
          @blur="$emit('touch-website')"
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
    fbErrors: {
      type: Array,
      default: () => [],
    },
    linkedinErrors: {
      type: Array,
      default: () => [],
    },
    twitterErrors: {
      type: Array,
      default: () => [],
    },
    websiteErrors: {
      type: Array,
      default: () => [],
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
