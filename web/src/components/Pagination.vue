<template>
  <span>
    <span>
      {{ pageStart }} - {{ pageEnd }}
    </span>
    <v-icon
      :disabled="prevDisabled"
      @click="onPrevPageClick"
    >
      mdi-chevron-left
    </v-icon>
    <v-icon
      :disabled="maxPage"
      @click="onNextPageClick"
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
    onPrevPageClick: {
      type: Function,
      required: true,
    },
    onNextPageClick: {
      type: Function,
      required: true,
    },
  },
  computed: {
    prevDisabled() {
      return this.$props.pageStart <= 1;
    },
  },
};

</script>
