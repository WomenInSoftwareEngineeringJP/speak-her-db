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
  },
  data: () => ({
    topics: [],
  }),
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
  },
};
</script>
