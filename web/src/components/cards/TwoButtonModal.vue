<template>
  <v-card>
    <v-col>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text px-8>
        <slot />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          @click="$emit('cancel')"
        >
          {{ $t('actions.cancel') }}
        </v-btn>
        <v-btn
          text
          color="primary darken-2"
          type="submit"
          @click="$emit('click')"
        >
          {{ $t('actions.submit') }}
        </v-btn>
      </v-card-actions>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
