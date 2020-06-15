<template>
  <v-row dense>
    <v-col>
      <v-autocomplete
        ref="topics"
        label="Topics"
        :items="topics"
        item-text="en"
        multiple
        chips
        deletable-chips
        outlined
        :value="value"
        @input="$emit('input', $event)"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      locationFields: ['city', 'prefecture'],
      topics: [
        { en: 'STEM' },
        { en: 'Business' },
        { en: 'Fintech' },
        { en: 'Art' },
      ],
    };
  },
  methods: {
  },
};
</script>
