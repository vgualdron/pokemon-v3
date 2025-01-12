import { defineStore } from 'pinia';
import PokemonApi from '~/api/pokemon/PokemonApi';
import CommonHelper from '~/helpers/CommonHelper';

const pokemonApi = new PokemonApi();
const commonHelper = new CommonHelper();

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    search: '',
    pokemons: {},
    pokemon: {},
    showFavorites: false,
    showModalPokemon: false
  }),
  actions: {
    async findByName() {
      const res = await pokemonApi.findByName();
      this.pokemons = res.data;
    },
    async findAll(data) {
      await commonHelper.delay(800);
      const res = await pokemonApi.findAll(data);
      const items = this.pokemons.results || [];
      const newResults = res.data.results;
      this.pokemons = { ...res.data, results: [...items, ...newResults] };
    },
    setSearch(data) {
      this.search = data;
    },
    setPokemons(data) {
      this.pokemons = data;
    },
    setPokemon(data) {
      this.pokemon = data;
    },
    async getPokemon({ name, isFavorite }) {
      await commonHelper.delay(500);
      const res = await pokemonApi.findByName(name);
      const data = res.data;
      data.favorite = isFavorite;
      this.pokemon = data;
    },
    setShowFavorites(data) {
      this.showFavorites = data;
    },
    setShowModalPokemon(data) {
      this.showModalPokemon = data;
    }
  }
});
