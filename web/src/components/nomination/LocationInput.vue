<template>
  <v-row dense>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-text-field
        ref="city"
        label="City"
        outlined
        :value="value.city"
        @input="updateLocation('city', $event)"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      xs="12"
    >
      <v-autocomplete
        ref="prefecture"
        label="Prefecture"
        :items="prefectures"
        item-text="en"
        outlined
        :value="value.prefecture"
        @input="updateLocation('prefecture', $event)"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      locationFields: ['city', 'prefecture'],
      prefectures: [
        { en: 'Aichi', ja: '愛知県' },
        { en: 'Akita', ja: '秋田県' },
        { en: 'Aomori', ja: '青森県' },
        { en: 'Chiba', ja: '千葉県' },
        { en: 'Ehime', ja: '愛媛県' },
        { en: 'Fukui', ja: '福井県' },
        { en: 'Fukuoka', ja: '福岡県' },
        { en: 'Fukushima', ja: '福島県' },
        { en: 'Gifu', ja: '岐阜県' },
        { en: 'Gunma', ja: '群馬県' },
        { en: 'Hiroshima', ja: '広島県' },
        { en: 'Hokkaido', ja: '北海道' },
        { en: 'Hyōgo', ja: '兵庫県' },
        { en: 'Ibaraki', ja: '茨城県' },
        { en: 'Ishikawa', ja: '石川県' },
        { en: 'Iwate', ja: '岩手県' },
        { en: 'Kagawa', ja: '香川県' },
        { en: 'Kagoshima', ja: '鹿児島県' },
        { en: 'Kanagawa', ja: '神奈川県' },
        { en: 'Kōchi', ja: '高知県' },
        { en: 'Kumamoto', ja: '熊本県' },
        { en: 'Kyoto', ja: '京都府' },
        { en: 'Mie', ja: '三重県' },
        { en: 'Miyagi', ja: '宮城県' },
        { en: 'Miyazaki', ja: '宮崎県' },
        { en: 'Nagano', ja: '長野県' },
        { en: 'Nagasaki', ja: '長崎県' },
        { en: 'Nara', ja: '奈良県' },
        { en: 'Niigata', ja: '新潟県' },
        { en: 'Ōita', ja: '大分県' },
        { en: 'Okayama', ja: '岡山県' },
        { en: 'Okinawa', ja: '沖縄県' },
        { en: 'Osaka', ja: '大阪府' },
        { en: 'Saga', ja: '佐賀県' },
        { en: 'Saitama', ja: '埼玉県' },
        { en: 'Shiga', ja: '滋賀県' },
        { en: 'Shimane', ja: '島根県' },
        { en: 'Shizuoka', ja: '静岡県' },
        { en: 'Tochigi', ja: '栃木県' },
        { en: 'Tokushima', ja: '徳島県' },
        { en: 'Tokyo', ja: '東京都' },
        { en: 'Tottori', ja: '鳥取県' },
        { en: 'Toyama', ja: '富山県' },
        { en: 'Wakayama', ja: '和歌山県' },
        { en: 'Yamagata', ja: '山形県' },
        { en: 'Yamaguchi', ja: '山口県' },
        { en: 'Yamanashi', ja: '山梨県' }],
    };
  },
  methods: {
    // Build the Location object by populating all the nameFields and latest values
    updateLocation(updatedField, updatedValue) {
      const location = {};
      this.locationFields.forEach((field) => {
        location[field] = updatedField === field ? updatedValue : this.$refs[field].value;
      });
      this.$emit('input', location);
    },
  },
};
</script>
