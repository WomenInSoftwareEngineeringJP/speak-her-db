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
                  pronouns=""
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
              <div
                v-if="pronouns !== ''"
                class="mb-2 pronouns"
              >
                {{ $t('findSpeaker.pronouns', [pronouns]) }}
              </div>
              <p>{{ speaker.get('speaker_bio') }}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <card-footer
          :speaker="speaker"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardHeader from './CardHeader.vue';
import CardFooter from './CardFooter.vue';
import TitleLocation from './TitleLocation.vue';

export default {
  components: {
    CardHeader,
    CardFooter,
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
    pronouns() {
      try {
        return this.speaker.get('pronouns') || '';
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
  methods: {
    contactSpeaker() {
      bus.$emit('contact-speaker', this.speaker);
    },
  },
};
</script>
