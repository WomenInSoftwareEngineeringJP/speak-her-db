<template>
  <v-col
    cols="12"
    md="6"
    xs="12"
  >
    <v-combobox
      ref="pronouns"
      :label="$t('nominateSpeaker.pronouns.label')"
      :hint="$t('nominateSpeaker.pronouns.hint')"
      :items="pronouns"
      persistent-hint
      outlined
      :value="value"
      :error-messages="errorMessages"
      @input="$emit('input', $event)"
    />
  </v-col>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    errorMessages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      pronouns: ['she/her', 'they/their'],
      error: null,
    };
  },
};
</script>
