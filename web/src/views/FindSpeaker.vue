<template>
  <v-container>
    <contact-dialog
      :speaker="selectedSpeaker"
      :show="showDialog"
      @close="showDialog = false"
      @submit="showDialog = false; showSuccess = true"
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
        <v-row
          justify="space-between"
          align="center"
        >
          <h2 class="py-2">
            {{ $t('findSpeaker.title') }}
          </h2>
          <pagination-row
            v-if="speakers.length"
            :first-entry="(page - 1) * pageSize + 1"
            :last-entry="lastEntry"
            :is-last-page="isLastPage"
            @onNextPage="getNextPage()"
            @onPrevPage="getPreviousPage()"
          />
        </v-row>
        <search />
        <v-row
          v-if="isLoading"
          justify="space-around"
          class="my-10"
        >
          <v-progress-circular
            indeterminate
            color="primary"
          />
        </v-row>
        <div
          v-if="!isLoading"
        >
          <div
            v-for="speaker in getSpeakersForPage"
            :key="speaker.id"
          >
            <speaker-card
              :speaker="speaker"
              :prefectures="prefectures"
              :topic-list="topicList"
              :language-list="languageList"
              class="mb-5"
            />
          </div>
        </div>
        <pagination-row
          v-if="speakers.length"
          :first-entry="(page - 1) * pageSize + 1"
          :last-entry="lastEntry"
          :is-last-page="isLastPage"
          @onNextPage="getNextPage()"
          @onPrevPage="getPreviousPage()"
        />
        <no-results v-if="hasNoSpeakers" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import api from '@/services/api';
import Search from '@/components/Search.vue';
import SpeakerCard from '@/components/speaker/SpeakerCard.vue';
import ContactDialog from '@/components/contact/ContactDialog.vue';
import ContactResult from '@/components/contact/ContactResult.vue';
import PaginationRow from '@/components/PaginationRow.vue';
import NoResults from '@/components/no-results/NoResults.vue';

export default {
  components: {
    ContactDialog,
    ContactResult,
    Search,
    SpeakerCard,
    PaginationRow,
    NoResults,
  },
  data: () => ({
    speakers: [],
    prefectures: [],
    topicList: [],
    languageList: [],
    error: null,
    selectedSpeaker: undefined,
    showDialog: false,
    showSuccess: false,
    page: 0,
    pageSize: 50,
    isLastPage: false,
    isLoading: true,
  }),
  computed: {
    selectedName() {
      if (!this.selectedSpeaker) return '';

      if (this.$i18n.locale === 'ja') {
        return this.selectedSpeaker.get('name_ja') || this.selectedSpeaker.get('name_en') || '';
      }
      return this.selectedSpeaker.get('name_en') || '';
    },
    getSpeakersForPage() {
      const offset = (this.page - 1) * this.pageSize;
      return this.speakers.slice(offset, this.page * this.pageSize);
    },
    lastEntry() {
      const lastPageEntry = this.page * this.pageSize;
      return lastPageEntry > this.speakers.length ? this.speakers.length : lastPageEntry;
    },
    hasNoSpeakers() {
      return !this.speakers.length && !this.isLoading;
    },
  },
  mounted() {
    api.getLocations(this.setPrefectures, this.setError);
    api.getTopics(this.setTopics, this.setError);
    api.getLanguages(this.setLanguageList, this.setError);
    this.getSpeakers();
    this.setupBusEvents();
  },
  beforeDestroy() {
    bus.$off('contact-speaker');
    bus.$off('search-by-params');
  },
  methods: {
    setupBusEvents() {
      bus.$on('contact-speaker', (speaker) => {
        this.selectedSpeaker = speaker;
        this.showDialog = true;
      });
      bus.$on('search-by-params', (params) => {
        this.resetPreSearchParams();
        this.getSpeakers(params);
      });
    },
    setPrefectures(records) {
      this.prefectures = records;
    },
    setTopics(records) {
      this.topicList = records;
    },
    setLanguageList(records) {
      this.languageList = records;
    },
    setError(err) {
      this.error = err;
    },
    getPreviousPage() {
      if (this.page > 1) {
        this.isLoading = true;
        this.page -= 1;
        this.isLastPage = false;
        this.isLoading = false;
      }
    },
    airTableNextPage() {
      // placeholder, this will be overwritten by the next method returned by airtablejs.
      // This will be set to `undefined` when the done function passed into eachPage is called
      // which marks that the last page on the server side was reached.
    },
    getNextPageInternal() {
      if (!this.isLastPage) {
        this.page += 1;
        const lastPageEntry = this.page * this.pageSize;
        this.isLastPage = lastPageEntry >= this.speakers.length;
      }
      this.isLoading = false;
    },
    getNextPage() {
      this.isLoading = true;
      if (this.airTableNextPage) {
        this.airTableNextPage();
        return;
      }

      this.getNextPageInternal();
    },
    getSpeakers(params = { topic: '', location: '' }) {
      const filter = `AND(FIND("${params.topic}", topics), FIND("${params.location}", location_id))`;

      this.$db('People')
        .select({
          view: 'Published',
          sort: [{ field: 'name_en', direction: 'asc' }],
          pageSize: this.pageSize,
          filterByFormula: filter,
        })
        .eachPage(
          (records, next) => {
            this.speakers.push(...records);
            this.page += 1;
            this.airTableNextPage = next;
            this.isLoading = false;
            this.isLastPage = this.pageSize > records.length;
          },
          (err) => {
            if (err) {
              this.error = err;
            }
            // if the error is null no new page exists
            this.isLastPage = true;
            this.isLoading = false;
            // set airTableNextPage to undefined to mark that we can not fetch any more pages
            // and have to switch to internal pagination logic
            this.airTableNextPage = undefined;
          },
        );
    },
    resetPreSearchParams() {
      this.speakers = [];
      this.page = 0;
      this.isLastPage = false;
      this.isLoading = true;
      this.airTableNextPage = undefined;
      this.selectedSpeaker = undefined;
    },
  },
};
</script>
