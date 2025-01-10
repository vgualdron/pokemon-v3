<template>
    <div class="container-list-items">
      <b-card v-for="(item, index) in items" :key="index.toString() + item.name">
        <b-card-text class="name-item">
          <h5 @click="selectPokemon(item.name, item.favorite)">
            {{ item.name }}
          </h5>
          <p @click="check(item)">
            <b-icon-star-fill :class="item.favorite ? 'icon-star-list check' : 'icon-star-list'"></b-icon-star-fill>
          </p>
        </b-card-text>
      </b-card>
    </div>
</template>
<script>
import { BIconStarFill } from 'bootstrap-vue';
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    BIconStarFill
  },
  computed: {
    ...mapState('pokemon', [
      'pokemons',
      'showFavorites'
    ])
  },
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
    ...mapActions('pokemon', [
      'setPokemons',
      'getPokemon',
      'setShowModalPokemon'
    ]),
    ...mapActions('common', [
      'setLoader'
    ]),
    async selectPokemon (name, isFavorite) {
      await this.setLoader(true);
      await this.getPokemon({ name, isFavorite });
      await this.setLoader(false);
      this.setShowModalPokemon(true);
    },
    check (item) {
      const results = this.pokemons.results.map((pokemon) => {
        if (pokemon.name === item.name) {
          pokemon.favorite = !pokemon.favorite;
        }
        return pokemon;
      });

      const items = {
        ...this.pokemons,
        results
      };
      this.setPokemons(items);
    }
  }
};
</script>
