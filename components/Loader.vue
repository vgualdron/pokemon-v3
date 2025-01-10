<template>
  <div>
    <div class="loader" v-show="loader">
      <div class="spin reel">
        <img class="image-loader" src="~/assets/images/loader.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('common', [
      'loader'
    ])
  }
};
</script>
