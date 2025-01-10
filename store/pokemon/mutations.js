const mutations = {
  SET_POKEMONS (state, payload) {
    state.pokemons = payload;
  },
  SET_POKEMON (state, payload) {
    state.pokemon = payload;
  },
  SET_SEARCH (state, payload) {
    state.search = payload;
  },
  SET_SHOW_FAVORITES (state, payload) {
    state.showFavorites = payload;
  },
  SET_SHOW_MODAL_POKEMON (state, payload) {
    state.showModalPokemon = payload;
  }
};
export default mutations;
