<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col lg="10">
        <h2>{{ $t('about.summary.title') }}</h2>
        <br>
        <p>
          {{ $t('about.summary.body') }}
        </p>

        <v-row
          justify="center"
          class="mt-10"
        >
          <v-btn
            outlined
            color="primary"
            to="/about"
          >
            {{ $t('about.summary.learnMore') }}
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
