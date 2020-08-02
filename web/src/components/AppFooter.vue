<template>
  <v-footer
    color="primary"
    dark
    app
    absolute
  >
    <v-container>
      <v-row no-gutters>
        <v-col
          cols="12"
          justify="center"
          align="center"
        >
          <a
            class="footer-link"
            target="_blank"
            href="https://github.com/WWCodeTokyo/speak-her-db"
          >{{ $t('footer.dateString') }}</a>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          cols="12"
          justify="center"
          align="center"
        >
          <a
            class="footer-link"
            target="_blank"
            href="https://www.netlify.com"
          >
            {{ $t('footer.netlify') }}
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {

};
</script>
