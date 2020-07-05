<template>
  <v-row dense>
    <v-col>
      <v-text-field
        ref="topics"
        label="Topics"
        hint="Add topic names or keywords separated by comma"
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
      type: String,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
