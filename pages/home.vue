<template>
  <div>
    <div class="container">
      <InputSearch />
    </div>
    <div v-if="items && items.length > 0" class="container">
      <ListItems :items="items"/>
      <div v-if="pokemons.next && showFavorites === false" class="see-more">
        <SeeMore />
      </div>
    </div>
    <div v-else class="container">
      <NotFoundItems />
    </div>
    <div>
      <NavbarFixedBottom :disabledFavorites="disabledFavorites"/>
    </div>
    <div>
      <ModalDetailPokemon />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import InputSearch from '../components/InputSearch';
import ListItems from '../components/ListItems';
import NotFoundItems from '../components/NotFoundItems';
import NavbarFixedBottom from '../components/NavbarFixedBottom';
import SeeMore from '../components/SeeMore';
import ModalDetailPokemon from '../components/ModalDetailPokemon';
export default {
  name: 'Home',
  components: {
    InputSearch,
    ListItems,
    NotFoundItems,
    NavbarFixedBottom,
    SeeMore,
    ModalDetailPokemon
  },
  watch: {
    disabledFavorites (newValue) {
      if (newValue) {
        this.setShowFavorites(false);
      }
    }
  },
  computed: {
    ...mapState('pokemon', [
      'search',
      'pokemons',
      'showFavorites'
    ]),
    items: {
      get () {
        let array = [];
        if (this.pokemons && this.pokemons.results) {
          if (this.showFavorites) {
            array = this.pokemons.results.filter((item) => {
              return item.favorite === true;
            });
          } else {
            array = this.pokemons.results;
          }
        }
        return array.filter((item) => {
          return item.name.toLowerCase().includes(this.search.toLowerCase());
        });
      },
      set (newValue) {
        return newValue;
      }
    },
    disabledFavorites () {
      let array = [];
      if (this.pokemons && this.pokemons.results) {
        array = this.pokemons.results.filter((item) => {
          return item.favorite === true;
        });
      }
      return array.length <= 0;
    }
  },
  async mounted () {
    await this.setLoader(true);
    await this.findAll();
    await this.setLoader(false);
  },
  methods: {
    ...mapActions('pokemon', [
      'findAll',
      'setShowFavorites'
    ]),
    ...mapActions('common', [
      'setLoader'
    ])
  }
};
</script>
