<template>
  <v-row
    class="mx-3"
    no-gutters
  >
    <v-col
      class="pl-0 ml-0"
      cols="12"
      md="11"
      sm="10"
    >
      <tag-box
        :tags="topics"
        class="mt-3"
      />
      <links
        v-if="$vuetify.breakpoint.mdAndUp"
        :facebook="speaker.get('facebook_url')"
        :twitter="speaker.get('twitter_url')"
        :linked-in="speaker.get('linkedin_url')"
        :website="speaker.get('website_url')"
        :prior-presentation="speaker.get('prior_presentation_url')"
      />
    </v-col>
    <v-col
      cols="12"
      md="1"
      sm="2"
      align-self="end"
    >
      <v-row
        justify="end"
        no-gutters
      >
        <links
          v-if="$vuetify.breakpoint.smAndDown"
          :facebook="speaker.get('facebook_url')"
          :twitter="speaker.get('twitter_url')"
          :linked-in="speaker.get('linkedin_url')"
          :website="speaker.get('website_url')"
          :prior-presentation="speaker.get('prior_presentation_url')"
        />
        <v-spacer />
        <v-btn
          color="primary"
          fab
          @click="$emit('contact-speaker')"
        >
          <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
          <v-icon>
            email
          </v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Links from './Links.vue';
import TagBox from './TagBox.vue';

export default {
  components: {
    Links,
    TagBox,
  },
  props: {
    speaker: {
      type: Object,
      required: true,
    },
    topicList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    topics() {
      const tKeys = this.speaker.get('topics');
      const speakerTopics = [];

      if (tKeys) {
        tKeys.forEach((topicId) => {
          const topic = this.topicList.find((elem) => (elem.id === topicId));
          if (topic) {
            speakerTopics.push({ name: topic.fields.name, name_ja: topic.fields.name_ja });
          }
        });
      }
      return speakerTopics;
    },
  },
};
</script>
