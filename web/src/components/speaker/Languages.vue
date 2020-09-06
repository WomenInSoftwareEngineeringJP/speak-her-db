<template>
  <v-col>
    <v-row>
      <div
        v-for="language in languages"
        :key="language.id"
        class="d-flex justify-center align-center mr-2"
      >
        <v-chip
          color="silver"
          label
          outlined
          small
        >
          {{ format(language) }}
        </v-chip>
      </div>
    </v-row>
  </v-col>
</template>

<script>
import formatLanguage from '@/util/format';

export default {
  props: {
    languages: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  methods: {
    format(language) {
      return formatLanguage(language);
    },
  },
};
</script>;
