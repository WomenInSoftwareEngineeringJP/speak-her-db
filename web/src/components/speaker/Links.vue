<template>
  <div class="mt-3">
    <social-button :link="twitter">
      <i class="fab fa-twitter" />
    </social-button>
    <social-button :link="linkedIn">
      <i class="fab fa-linkedin-in" />
    </social-button>
    <social-button :link="facebook">
      <i class="fab fa-facebook-f" />
    </social-button>
    <social-button :link="website">
      <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
      <v-icon>web</v-icon>
    </social-button>
  </div>
</template>

<script>
import SocialButton from './SocialButton.vue';

export default {
  components: {
    SocialButton,
  },
  props: {
    twitter: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    linkedIn: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },
};
</script>
