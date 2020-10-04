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
  },
};
</script>
