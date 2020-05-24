<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-autocomplete
          label="Topic"
          placeholder="Start typing to Search"
          prepend-icon="search"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-autocomplete
          label="City, Prefecture, or Region"
          placeholder="Start typing to Search"
          prepend-icon="search"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>
