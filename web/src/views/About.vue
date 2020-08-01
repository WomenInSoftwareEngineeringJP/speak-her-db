<template>
  <page-card>
    <h1>{{ $t('about.title') }}</h1>
    <br>
    <p>{{ $t('about.summary.body') }}</p>
    <p>{{ $t('about.purpose') }}</p>
    <v-divider />
    <f-a-q />
  </page-card>
</template>

<script>
import PageCard from '@/components/cards/PageCard.vue';
import FAQ from '@/components/about/FAQ.vue';

export default {
  components: {
    FAQ,
    PageCard,
  },
  data() {
    return {

    };
  },
};
</script>
