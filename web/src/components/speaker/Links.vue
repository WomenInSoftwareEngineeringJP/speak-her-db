<template>
  <div class="mt-3">
    <social-button :link="twitter">
      <i
        class="fab fa-twitter"
      />
      <v-tooltip
        activator="parent"
        location="bottom"
        content-class="tooltip-social"
      >
        {{ $t('findSpeaker.links.twitter') }}
      </v-tooltip>
    </social-button>
    <social-button :link="linkedIn">
      <i
        class="fab fa-linkedin-in"
      />
      <v-tooltip
        activator="parent"
        location="bottom"
        content-class="tooltip-social"
      >
        <span>{{ $t('findSpeaker.links.linkedIn') }}</span>
      </v-tooltip>
    </social-button>
    <social-button :link="facebook">
      <i
        class="fab fa-facebook-f"
      />
      <v-tooltip
        activator="parent"
        location="bottom"
        content-class="tooltip-social"
      >
        <span>{{ $t('findSpeaker.links.facebook') }}</span>
      </v-tooltip>
    </social-button>
    <social-button :link="website">
      <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
      <v-icon>
        mdi-web-box
      </v-icon>
      <v-tooltip
        activator="parent"
        location="bottom"
        content-class="tooltip-social"
      >
        <span>{{ $t('findSpeaker.links.website') }}</span>
      </v-tooltip>
    </social-button>
    <social-button :link="priorPresentation">
      <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
      <v-icon>
        mdi-video-outline
      </v-icon>
      <v-tooltip
        activator="parent"
        location="bottom"
        content-class="tooltip-social"
      >
        <span>{{ $t('findSpeaker.links.samplePresentattion') }}</span>
      </v-tooltip>
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
    priorPresentation: {
      type: String,
      default: '',
    },
  },
};
</script>
