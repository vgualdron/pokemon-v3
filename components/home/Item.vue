<template>
  <b-card>
    <b-card-text class="">
      <h5 @click="selectPokemon(item.name, item.favorite)">
        {{ item.name }}
      </h5>
      <p @click="check(item)">
        <i :class="`bi bi-star-fill icon-star-list ${!item.favorite || 'check'}`"></i>
      </p>
    </b-card-text>
  </b-card>
</template>

<script setup>
import { defineProps } from 'vue';
import { usePokemonStore } from '~/stores/pokemon';
import { useCommonStore } from '~/stores/common';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const pokemonStore = usePokemonStore();
const commonStore = useCommonStore();

const selectPokemon = async (name, isFavorite) => {
  await commonStore.setLoader(true);
  await pokemonStore.getPokemon({ name, isFavorite });
  await commonStore.setLoader(false);
  pokemonStore.setShowModalPokemon(true);
};

const check = (item) => {
  const results = pokemonStore.pokemons.results.map((pokemon) => {
    if (pokemon.name === item.name) {
      pokemon.favorite = !pokemon.favorite;
    }
    return pokemon;
  });

  const items = {
    ...pokemonStore.pokemons,
    results,
  };

  pokemonStore.setPokemons(items);
};
</script>
