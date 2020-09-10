<template>
  <div>
    <v-row>
      <h2 class="d-flex align-center mr-4">
        {{ title }}
      </h2>
      <languages
        v-if="$vuetify.breakpoint.mdAndUp"
        :languages="languages"
      />
      <v-spacer />
    </v-row>
    <!--mobile view-->
    <v-row
      v-if="$vuetify.breakpoint.smAndDown"
      class="my-3"
    >
      <languages
        :languages="languages"
      />
    </v-row>
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
  },
  data() {
    return {
    };
  },
};
</script>
