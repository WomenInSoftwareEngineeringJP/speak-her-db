<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col lg="10">
        <h1>Nominate a Speaker</h1>
        <nominate-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NominateCard from '@/components/NominateCard.vue';

export default {
  components: {
    NominateCard,
  },
  data() {
    return {

    };
  },
};
</script>
