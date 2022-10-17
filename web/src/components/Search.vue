<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-autocomplete
          :label="$t('findSpeaker.topics')"
          :placeholder="$t('findSpeaker.searchPlaceholder')"
          prepend-icon="mdi-search"
          clearable
          :items="topicItems"
          @select="selectItem('topic', value)"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-autocomplete
          :label="$t('findSpeaker.places')"
          :placeholder="$t('findSpeaker.searchPlaceholder')"
          prepend-icon="mdi-search"
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
  data: () => ({
    topic: '',
    location: '',
    topicItems: [],
    locationItems: [],
  }),
  created() {
    this.getTopicItems();
    this.getLocationItems();
  },
  methods: {
    selectItem(fieldName, value) {
      debugger;
      this[fieldName] = value || '';
      this.emitValues();
      console.log(value);
    },
    emitValues() {
      console.log(this.topic);
      this.emitter.emit('search-by-params', {
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
          fields: ['prefecture'],
          sort: [
            { field: 'prefecture', direction: 'asc' },
          ],
        })
        .eachPage(
          (records) => {
            const prefectureNames = this.getItemsWithField(records, 'prefecture');
            this.locationItems.push(...prefectureNames);
          },
        );
    },
    getItemsWithField(records, fieldName) {
      return records.map((record) => record.get(fieldName)).filter(Boolean);
    },
  },
};
</script>
