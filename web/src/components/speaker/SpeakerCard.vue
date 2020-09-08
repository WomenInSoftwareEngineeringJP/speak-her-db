<template>
  <v-card>
    <v-row
      :class="dynamicCardPadding"
      align="stretch"
    >
      <v-col>
        <v-expansion-panels
          accordion
          flat
          hover
          class="pa-0 ma-0"
        >
          <v-expansion-panel class="py-0 my-0">
            <v-expansion-panel-header class="py-0 my-0">
              <v-col
                no-gutters
                class="pa-0 ma-0"
              >
                <card-header
                  :title="name"
                  :languages="languages"
                  :pronouns="speaker.get('pronouns')"
                  class="mr-5"
                  @contact-speaker="contactSpeaker()"
                />
                <title-location
                  :speaker="speaker"
                  :prefectures="prefectures"
                />
              </v-col>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pa-0 ma-0">
              <p>{{ speaker.get('speaker_bio') }}</p>
              <links
                :facebook="speaker.get('facebook_url')"
                :twitter="speaker.get('twitter_url')"
                :linked-in="speaker.get('linkedin_url')"
                :website="speaker.get('website_url')"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <tag-box
          :tags="topics"
          class="mt-3"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardHeader from './CardHeader.vue';
import Links from './Links.vue';
import TagBox from './TagBox.vue';
import TitleLocation from './TitleLocation.vue';

export default {
  components: {
    CardHeader,
    Links,
    TagBox,
    TitleLocation,
  },
  props: {
    speaker: {
      type: Object,
      required: true,
    },
    prefectures: {
      type: Array,
      required: true,
    },
    languageList: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    topics: [],
  }),
  computed: {
    languages() {
      const languageIds = this.speaker.get('languages');
      return this.languageList.filter((language) => languageIds.includes(language.id));
    },
    name() {
      try {
        return this.speaker.get('name_en') || '';
      } catch (e) {
        return '';
      }
    },
    speakerBio() {
      try {
        return this.speaker.get('speaker_bio');
      } catch (e) {
        return '';
      }
    },
    dynamicCardPadding() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return {
          'px-6': true,
          'py-4': true,
        };
      }
      return {
        'px-4': true,
        'py-4': true,
      };
    },
  },
  created() {
    this.$getTopics(this.setTopics, this.setError);
  },
  methods: {
    setTopics(records) {
      const tKeys = this.speaker.get('topics');
      this.topics = [];

      for (let i = 0; i < tKeys.length; i += 1) {
        const topic = records.find((elem) => (elem.id === tKeys[i]));
        this.topics.push(topic.get('name'));
      }
    },
    setError(err) {
      this.error = err;
    },
    contactSpeaker() {
      bus.$emit('contact-speaker', this.speaker);
    },
  },
};
</script>
