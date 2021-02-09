<template>
  <div class="mt-3">
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <social-button :link="twitter">
          <i class="fab fa-twitter" v-on="on" />
        </social-button>
      </template>
      <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
      <span>Twitter</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <social-button :link="linkedIn">
          <i class="fab fa-linkedin-in" v-on="on" />
        </social-button>
      </template>
      <span>LinkedIn</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <social-button :link="facebook">
          <i class="fab fa-facebook-f" v-on="on" />
        </social-button>
      </template>
      <span>Facebook</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <social-button :link="website">
          <v-icon v-on="on">web</v-icon>
        </social-button>
      </template>
      <span>Website</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <social-button :link="priorPresentation">
          <v-icon v-on="on">ondemand_video</v-icon>
        </social-button>
      </template>
      <span>Presentation</span>
    </v-tooltip>
  </div>
</template>

<script>
import SocialButton from '@/components/buttons/SocialButton.vue';

export default {
  components: {
    SocialButton,
  },
  props: {
    twitter: {
      type: String,
      default: '',
    },
    facebook: {
      type: String,
      default: '',
    },
    linkedIn: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    priorPresentation: {
      type: String,
      default: '',
    },
  },
};
</script>
