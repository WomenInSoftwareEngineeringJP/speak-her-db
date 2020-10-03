<template>
  <span>
    <span>
      {{ pageStart }} - {{ pageEnd }}
    </span>
    <v-icon
      :disabled="prevDisabled"
      @click="prevPage()"
    >
      mdi-chevron-left
    </v-icon>
    <v-icon
      :disabled="maxPage"
      @click="nextPage()"
    >
      mdi-chevron-right
    </v-icon>
  </span>
</template>

<script>

export default {
  props: {
    pageStart: {
      type: Number,
      required: true,
    },
    pageEnd: {
      type: Number,
      required: true,
    },
    maxPage: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    prevDisabled() {
      return this.$props.pageStart <= 1;
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
