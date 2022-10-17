<template>
  <div>
      <h3>{{ title }}</h3>
      <div class="px-8">
        <slot />
      </div>
      <div>
        <button
          @click="$emit('cancel')"
        >
          {{ $t('actions.cancel') }}
      </button>
        <button
          color="primary darken-2"
          type="submit"
          @click="$emit('click')"
        >
          {{ $t('actions.submit') }}
    </button>
      </div>
  </div>
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
