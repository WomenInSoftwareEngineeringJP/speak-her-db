<template>
  <v-row>
    <v-spacer />
    <v-col
      lg="3"
      class="text-right"
    >
      <pagination
        :first-entry="firstEntry"
        :last-entry="lastEntry"
        :is-last-page="isLastPage"
        @onPrevPageClick="prevPage()"
        @onNextPageClick="nextPage()"
      />
    </v-col>
  </v-row>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
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
      this.$emit('onPrevPage');
    },
    nextPage() {
      this.$emit('onNextPage');
    },
  },
};

</script>
