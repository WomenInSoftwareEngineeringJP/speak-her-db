<template>
  <v-col :class="dynamicPadding">
    <v-row>
      <div
        v-for="language in languages"
        :key="language.id"
        class="d-flex justify-center align-center mr-2 mb-1"
      >
        <v-chip
          color="silver"
          variant="outlined"
          size="small"
        >
          {{ format(language) }}
        </v-chip>
      </div>
    </v-row>
  </v-col>
</template>

<script>

export default {
  props: {
    languages: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    dynamicPadding() {
      /*
      if (this.$vuetify.breakpoint.mdAndUp) {
        return {

        };
      }
      */
      return {
        'py-0': true,
      };
    },
  },
  methods: {
    format(language) {
      return language.fields.name;
    },
  },
};
</script>;
