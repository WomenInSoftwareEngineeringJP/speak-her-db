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
      :speaker-name="selectedName"
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
        <v-row v-if="speakers.length">
          <v-spacer />
          <v-col
            lg="3"
            class="text-right"
          >
            <pagination
              :page-start="(page - 1) * pageSize + 1"
              :page-end="lastPageEntry"
              :max-page="isMaxPage"
              :on-next-page-click="getNextPage"
              :on-prev-page-click="getPreviousPage"
            />
          </v-col>
        </v-row>
        <search v-if="false" />
        <div
          v-for="speaker in getSpeakersForPage"
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
import api from '@/services/api';
import SpeakerCard from '@/components/speaker/SpeakerCard.vue';
import Search from '@/components/Search.vue';
import Pagination from '@/components/Pagination.vue';
import ContactDialog from '@/components/contact/ContactDialog.vue';
import ContactResult from '@/components/contact/ContactResult.vue';

export default {
  components: {
    ContactDialog,
    ContactResult,
    Pagination,
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
    page: 0,
    pageSize: 50,
    isMaxPage: false,
  }),
  computed: {
    selectedName() {
      if (this.selectedSpeaker) {
        if (this.$i18n.locale === 'ja') {
          return this.selectedSpeaker.get('name_ja') || this.selectedSpeaker.get('name_en') || '';
        }
        return this.selectedSpeaker.get('name_en') || '';
      }
      return '';
    },
    getSpeakersForPage() {
      const offset = (this.page - 1) * this.pageSize;
      return this.speakers.slice(offset, this.page * this.pageSize);
    },
    lastPageEntry() {
      const lastPageEntry = this.page * this.pageSize;
      return lastPageEntry > this.speakers.length ? this.speakers.length : lastPageEntry;
    },
  },
  mounted() {
    api.getLocations(this.setPrefectures, this.setError);
    this.$getLanguages(this.setLanguageList, this.setError);
    this.getSpeakers();

    bus.$on('contact-speaker', (speaker) => {
      this.selectedSpeaker = speaker;
      this.showDialog = true;
    });
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
    getPreviousPage() {
      if (this.page > 1) {
        this.page -= 1;
        this.isMaxPage = false;
      }
    },
    airTableNextPage() {
      // placeholder, this will be overwritten by the next method returned by airtablejs.
      // This will be set to `undefined` when the done function passed into eachPage is called
      // which marks that the last page on the server side was reached.
    },
    getNextPageInternal() {
      if (!this.isMaxPage) {
        this.page += 1;
        const lastPageEntry = this.page * this.pageSize;
        this.isMaxPage = lastPageEntry >= this.speakers.length;
      }
    },
    getNextPage() {
      if (this.airTableNextPage) {
        this.airTableNextPage();
        return;
      }

      this.getNextPageInternal();
    },
    getSpeakers() {
      this.$db('People')
        .select({
          view: 'Published',
          sort: [{ field: 'name_en', direction: 'asc' }],
          pageSize: this.pageSize,
        })
        .eachPage(
          (records, next) => {
            this.speakers.push(...records);
            this.page += 1;
            this.airTableNextPage = next;
          },
          (err) => {
            if (err) {
              this.error = err;
            }

            // if the error is null no new page exists
            this.isMaxPage = true;

            // set airTableNextPage to undefined to mark that we can not fetch any more pages
            // and have to switch to internal pagination logic
            this.airTableNextPage = undefined;
          },
        );
    },
  },
};
</script>
