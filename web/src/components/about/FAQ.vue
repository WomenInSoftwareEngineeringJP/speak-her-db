<template>
  <div class="mt-5">
    <h2>
      {{ $t('faq.title') }}
    </h2>
    <br>
    <div
      v-for="q in questions"
      :key="q.question"
    >
      <h3>{{ q.question }}</h3>
      <p>{{ q.answer }}</p>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      questions: [
        {
          question: this.$t('faq.whyQ'),
          answer: this.$t('faq.whyA'),
        },
        {
          question: this.$t('faq.obligationQ'),
          answer: this.$t('faq.obligationA'),
        },
        {
          question: this.$t('faq.freeQ'),
          answer: this.$t('faq.freeA'),
        },
        {
          question: this.$t('faq.whoQ'),
          answer: this.$t('faq.whoA'),
        },
        {
          question: this.$t('faq.correctionQ'),
          answer: this.$t('faq.correctionA'),
        },
      ],
    };
  },
};
</script>
