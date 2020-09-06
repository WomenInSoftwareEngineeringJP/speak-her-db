<template>
  <v-row>
    <h2 class="d-flex align-center mr-4">
      {{ title }}
    </h2>
    <h4
      v-if="pronouns !==''"
      class="d-flex mr-4 pronouns"
    >
      {{ pronouns }}
    </h4>
    <languages :languages="languages" />
    <v-spacer />
    <v-btn
      v-if="false"
      icon
      large
      class="ml-1"
      @click="toggleFavorite"
    >
      <v-icon>
        {{ star }}
      </v-icon>
    </v-btn>
    <v-btn
      icon
      large
      class="ml-1"
      @click="$emit('contact-speaker')"
    >
      <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
      <v-icon>email</v-icon>
    </v-btn>
  </v-row>
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
      favorited: false,
    };
  },
  computed: {
    star() {
      return this.favorited ? 'star' : 'star_border';
    },
  },
  methods: {
    toggleFavorite() {
      this.favorited = !this.favorited;
      // TODO: find a way to save this
    },
  },
};
</script>
