<template>
  <v-form class="my-3">
    <name-input />
    <v-text-field
      label="Email"
      outlined
    />
    <job-input />
    <location-input />
    <v-textarea
      label="Speaker Bio"
      hint="A brief description of the nominee"
      outlined
    />
    <submitter-input />
    <v-btn color="primary">
      Submit
    </v-btn>
  </v-form>
</template>

<script>
import NameInput from '@/components/nomination/NameInput.vue';
import JobInput from '@/components/nomination/JobInput.vue';
import LocationInput from '@/components/nomination/LocationInput.vue';
import SubmitterInput from '@/components/nomination/SubmitterInput.vue';

export default {
  components: {
    NameInput,
    JobInput,
    LocationInput,
    SubmitterInput,
  },
};
</script>
