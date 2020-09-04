<template>
  <v-container>
    <contact-dialog
      :speaker="selectedSpeaker"
      :show="showDialog"
      @close="showDialog=false"
      @submit="showDialog= false; showSuccess = true"
    />
    <contact-result
      :show="showSuccess"
      :name="selectedName"
      @close="showSuccess = false"
    />
    <v-row
      justify="center"
      no-gutters
    >
      <v-col lg="10">
        <v-row>
          <h2 class="mx-2 mb-2">
            {{ $t('findSpeaker.title') }}
          </h2>
        </v-row>
        <search v-if="false" />
        <div
          v-for="speaker in speakers"
          :key="speaker.id"
        >
          <speaker-card
            :speaker="speaker"
            :prefectures="prefectures"
            :language-list="languageList"
            class="mb-5"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SpeakerCard from '@/components/SpeakerCard.vue';
import Search from '@/components/Search.vue';
import ContactDialog from '@/components/contact/ContactDialog.vue';
import ContactResult from '@/components/contact/ContactResult.vue';

export default {
  components: {
    ContactDialog,
    ContactResult,
    Search,
    SpeakerCard,
  },
  data: () => ({
    speakers: [],
    prefectures: [],
    languageList: [],
    error: null,
    selectedSpeaker: undefined,
    showDialog: false,
    showSuccess: false,
  }),
  computed: {
    selectedName() {
      return this.selectedSpeaker ? this.selectedSpeaker.get('name_en') : '';
    },
  },
  mounted() {
    this.$getLocations(this.setPrefectures, this.setError);
    this.$getLanguages(this.setLanguageList, this.setError);
    this.getSpeakers();

    bus.$on('contact-speaker', (speaker) => { this.selectedSpeaker = speaker; this.showDialog = true; });
  },
  beforeDestroy() {
    bus.$off('contact-speaker');
  },
  methods: {
    setPrefectures(records) {
      this.prefectures = records;
    },
    setLanguageList(records) {
      this.languageList = records;
    },
    setError(err) {
      this.error = err;
    },
    getSpeakers() {
      this.$db('People')
        .select({
          view: 'Published',
          sort: [
            { field: 'name_en', direction: 'asc' },
          ],
        })
        .firstPage((err, records) => {
          if (err) {
            this.error = err;
          } else {
            this.speakers = records;
          }
        });
    },
  },
};
</script>
