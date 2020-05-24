<template>
  <div class="home">
    <speaker-list />
  </div>
</template>

<script>
// @ is an alias to /src
import SpeakerList from '@/components/SpeakerList.vue';

export default {
  name: 'Home',
  components: {
    SpeakerList,
  },
};
</script>
