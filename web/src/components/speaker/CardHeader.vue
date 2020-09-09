<template>
  <div>
    <v-row>
      <h2 class="d-flex align-center mr-4">
        {{ title }}
      </h2>
      <h4
        v-if="$vuetify.breakpoint.mdAndUp && pronouns !==''"
        class="d-flex mr-4 pronouns"
      >
        {{ pronouns }}
      </h4>
      <languages
        v-if="$vuetify.breakpoint.mdAndUp"
        :languages="languages"
      />
      <v-spacer />
    </v-row>
    <!--mobile view-->
    <div v-if="$vuetify.breakpoint.smAndDown">
      <v-row
        v-if="pronouns !==''"
        class="pb-3"
      >
        <h4
          class="d-flex mr-4 pronouns"
        >
          {{ pronouns }}
        </h4>
      </v-row>
      <v-row>
        <languages
          :languages="languages"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import Languages from './Languages.vue';

export default {
  components: {
    Languages,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    languages: {
      type: Array,
      required: false,
      default: () => [],
    },
    pronouns: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    };
  },
  computed: {
    // Dynamically generate class based on viewport size
    contactClass() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return { 'ml-1': true };
      }
      return {

      };
    },
  },
  methods: {
  },
};
</script>
