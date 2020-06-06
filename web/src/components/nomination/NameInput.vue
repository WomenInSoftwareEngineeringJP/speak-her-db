<template>
  <v-row dense>
    <v-col>
      <v-text-field
        ref="title"
        :value="value.title"
        label="Title"
        outlined
        @input="updateName('title', $event)"
      />
    </v-col>
    <v-col>
      <v-text-field
        ref="first"
        :value="value.first"
        label="First Name"
        outlined
        @input="updateName('first', $event)"
      />
    </v-col>
    <v-col>
      <v-text-field
        ref="middle"
        :value="value.middle"
        label="Middle Name"
        outlined
        @input="updateName('middle', $event)"
      />
    </v-col>
    <v-col>
      <v-text-field
        ref="last"
        :value="value.last"
        label="Last Name"
        outlined
        @input="updateName('last', $event)"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    updateName(field, updated) {
      console.log(updated);
      this.$emit('input', {
        title: field === 'title' ? updated : this.$refs.title.value,
        first: field === 'first' ? updated : this.$refs.first.value,
        middle: field === 'middle' ? updated : this.$refs.middle.value,
        last: field === 'last' ? updated : this.$refs.last.value,
      });
    },
  },
};
</script>
