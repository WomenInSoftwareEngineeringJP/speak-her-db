<template>
  <span>
    <span>
      {{ firstEntry }} - {{ lastEntry }}
    </span>
    <v-icon
      :disabled="isFirstPage"
      @click="prevPage()"
    >
      mdi-chevron-left
    </v-icon>
    <v-icon
      :disabled="isLastPage"
      @click="nextPage()"
    >
      mdi-chevron-right
    </v-icon>
  </span>
</template>

<script>

export default {
  props: {
    firstEntry: {
      type: Number,
      required: true,
    },
    lastEntry: {
      type: Number,
      required: true,
    },
    isLastPage: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    isFirstPage() {
      return this.$props.firstEntry <= 1;
    },
  },
  methods: {
    prevPage() {
      this.$emit('onPrevPageClick');
    },
    nextPage() {
      this.$emit('onNextPageClick');
    },
  },
};

</script>
