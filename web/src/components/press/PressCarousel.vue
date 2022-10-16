<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item, i) in press"
      :key="i"
      :href="item.link"
      target="_blank"
      eager
    >
      <v-container
        fill-height
        fluid
      >
        <v-row class="mx-1">
          <v-col>
            <v-row
              justify="center"
              class="mb-5"
            >
            <!--
              <v-img
                max-height="200"
                :max-width="500"
                contain
                :src="item.image"
              />
              -->
            </v-row>
            <v-row
              justify="center"
              class="carousel-text"
            >
              <i>{{ item.quote }}</i>
            </v-row>
            <v-row
              justify="center"
              class="carousel-text"
            >
              {{ item.name }}
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      press: [
        {
          image: 'https://cdn.japantimes.2xx.jp/wp-content/uploads/2017/03/new-JT-logo.jpg', // TODO: Is this okay to fetch from their CDN?
          name: 'The Japan Times',
          quote: '"...SpeakHer aims to assist event organizers by providing a free bilingual database of public speakers in Japan who are women."',
          link: 'https://www.japantimes.co.jp/community/2020/09/28/issues/speakher-manels-women/',
        },
        {
          image: 'https://japanbyrivercruise.com/assets/images/image01.png?v88719225713061',
          name: 'Japan By River Cruise Podcast',
          quote: `"...If more women see women being respresented,
            see women speaking, then they'll go, oh, that's a place I can be active too!"`,
          link: 'https://share.transistor.fm/s/f53eaea0',
        },
      ],
    };
  },
  methods: {

  },
};
</script>
