<template>
  <b-link href="#" @click="seeMore">See more ...</b-link>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('pokemon', [
      'pokemons'
    ])
  },
  methods: {
    ...mapActions('pokemon', [
      'findAll'
    ]),
    ...mapActions('common', [
      'setLoader'
    ]),
    async seeMore (event) {
      event.preventDefault();
      let url = null;
      if (this.pokemons && this.pokemons.next) {
        url = this.pokemons.next;
      }
      await this.setLoader(true);
      await this.findAll(url);
      await this.setLoader(false);
    }
  }
};
</script>
