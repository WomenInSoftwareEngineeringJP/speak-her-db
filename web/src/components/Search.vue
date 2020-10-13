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
          clearable
          :items="topicItems"
          @change="selectItem('topic', $event)"
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
          clearable
          :items="locationItems"
          @change="selectItem('location', $event)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: '',
      location: '',
      topicItems: [],
      locationItems: [],
    };
  },
  created() {
    this.getTopicItems();
    this.getLocationItems();
  },
  methods: {
    selectItem(fieldName, value) {
      this[fieldName] = value || '';
      this.emitValues();
    },
    emitValues() {
      bus.$emit('search-by-params', {
        topic: this.topic,
        location: this.location,
      });
    },
    getTopicItems() {
      this.$db('Topics')
        .select({
          view: 'All',
          fields: ['name'],
          sort: [{ field: 'name', direction: 'asc' }],
        })
        .eachPage(
          (records) => {
            const topics = this.getItemsWithField(records, 'name');
            this.topicItems.push(...topics);
          },
        );
    },
    getLocationItems() {
      this.$db('Location')
        .select({
          view: 'All',
          fields: ['prefecture', 'region'],
          sort: [
            { field: 'prefecture', direction: 'asc' },
            { field: 'region', direction: 'asc' },
          ],
        })
        .eachPage(
          (records) => {
            const prefectureNames = this.getItemsWithField(records, 'prefecture');
            const regionNames = this.getItemsWithField(records, 'region');
            this.locationItems.push(...prefectureNames, ...regionNames);
          },
        );
    },
    getItemsWithField(records, fieldName) {
      return records.map((record) => record.get(fieldName)).filter(Boolean);
    },
  },
};
</script>
