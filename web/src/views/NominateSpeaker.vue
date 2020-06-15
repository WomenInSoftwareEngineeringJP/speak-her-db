<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col lg="10">
        <v-card>
          <v-row
            class="px-8 py-2"
          >
            <v-col>
              <h1>Nominate a Speaker</h1>
              <nominate-form />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NominateForm from '@/components/nomination/NominateForm.vue';

export default {
  components: {
    NominateForm,
  },
  data() {
    return {

    };
  },
};
</script>
