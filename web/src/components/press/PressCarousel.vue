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
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-container
          fluid
          fill-height
        >
          <v-row>
            <v-col>
              <v-row
                justify="center"
                class="mb-5"
              >
                <v-img
                  max-width="500"
                  :src="item.image"
                />
              </v-row>
              <v-row justify="center">
                {{ item.quote }}
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        '#7e2c85',
        '#c33764',
        '#7e2c85',
        '#842b5f',
      ],
      press: [
        {
          image: 'https://cdn.japantimes.2xx.jp/wp-content/uploads/2017/03/new-JT-logo.jpg', // TODO: Is this okay to fetch from their CDN?
          quote: '"...SpeakHer aims to assist event organizers by providing a free bilingual database of public speakers in Japan who are women."',
          link: 'https://www.japantimes.co.jp/community/2020/09/28/issues/speakher-manels-women/',
        },
        {
          image: 'https://cdn.japantimes.2xx.jp/wp-content/uploads/2017/03/new-JT-logo.jpg',
          quote: 'Lorum Ipsum',
          link: 'http://www.example.com',
        },
      ],
    };
  },
  methods: {

  },
};
</script>
