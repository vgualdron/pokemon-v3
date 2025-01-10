<template>
  <div class="not-found">
    <h6 class="title">
      Uh-oh!
    </h6>
    <h6 class="subtitle">
      You look lost on your journey!
    </h6>
    <div class="link-get-started">
      <b-button pill variant="danger" @click="clearSearch">Go back home</b-button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions('pokemon', [
      'setSearch'
    ]),
    clearSearch () {
      this.setSearch('');
    }
  }
};
</script>
