<template>
  <v-row>
    <h2 class="d-flex align-center mr-4">
      {{ title }}
    </h2>
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
        {{ formatLanguage(language) }}
      </v-chip>
    </div>
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
export default {
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
    formatLanguage(language) {
      return (language.fields.native && language.fields.native !== '')
        ? `${language.fields.name} - ${language.fields.native}`
        : language.fields.name;
    },
  },
};
</script>
