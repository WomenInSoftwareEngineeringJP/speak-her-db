<template>
  <v-row>
    <h2>{{ title }}</h2>
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
