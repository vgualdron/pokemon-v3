<template>
  <div class="modal-pokemon">
    <b-modal @hidden="resetModal" v-model="showModal" scrollable centered>
      <div class="text-center">
        <img class="image-background-modal" :src="'/images/background-modal.png'" />
        <img class="image-pokemon-modal" :src="urlImageItem" />
      </div>
      <div class="data content-name">
        <h3>Name: </h3>
        <p>{{ pokemon.name }}</p>
      </div>
      <div class="data content-name">
        <h3>Weight: </h3>
        <p>{{ pokemon.weight }}</p>
      </div>
      <div class="data content-name">
        <h3>Height: </h3>
        <p>{{ pokemon.height }}</p>
      </div>
      <div class="data content-name" v-if="pokemon && pokemon.types">
        <h3>Types: </h3>
        <p>{{ getTypes(pokemon.types) }}</p>
      </div>
      <div class="data btn-share">
        <button pill variant="danger" class="my-sm-0" @click="copy(pokemon)">
          Share to my friends
        </button>
        <p @click="check(pokemon)">
          <i :class="pokemon.favorite ? 'bi bi-star-fill icon-star-list check' : 'bi bi-star icon-star-list'"></i>
        </p>
      </div>
    </b-modal>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePokemonStore } from '~/stores/pokemon';

const pokemonStore = usePokemonStore();

const showModal = computed(() => pokemonStore.showModalPokemon);
const pokemon = computed(() => pokemonStore.pokemon);
const urlImageItem = computed(() => pokemon?.value?.sprites?.other['official-artwork']?.front_default);

const resetModal = () => {
  pokemonStore.setShowModalPokemon(false);
};

const getTypes = (array) => {
  return array.reduce((oldValue, newValue, index) => {
    return oldValue.concat(newValue.type.name, index === array.length - 1 ? '' : ', ');
  }, '');
};

const check = (item) => {
  const results = pokemonStore.pokemons.results.map((pokemon) => {
    if (pokemon.name === item.name) {
      pokemon.favorite = !pokemon.favorite;
    }
    return pokemon;
  });

  pokemonStore.setPokemon({
    ...item,
    favorite: !item.favorite,
  });

  pokemonStore.setPokemons({
    ...pokemonStore.pokemons,
    results,
  });
};

const copy = (pokemon) => {
  const name = 'Name: '.concat(pokemon.name);
  const weight = 'Weight: '.concat(pokemon.weight);
  const height = 'Height: '.concat(pokemon.height);
  const types = 'Types: '.concat(getTypes(pokemon.types));
  const text = name.concat(', ', weight, ', ', height, ', ', types, '.');
  navigator.clipboard.writeText(text);
  alert('Text copied to clipboard: ' + text);
};
</script>
