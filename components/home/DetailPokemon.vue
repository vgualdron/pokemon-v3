<template>
   <b-modal
    @show="disableBodyScroll"
    @hidden="enableBodyScroll"
    v-model="showModal"
    scrollable
    centered>
    <div class="container-image">
      <img class="btn-close-icon" src="../../public/images/close.png" @click="resetModal"/>
      <img class="image-background-modal" src="../../public/images/background-modal.png" />
      <img class="image-pokemon-modal" :src="urlImageItem" />
    </div>
    <div v-if="pokemon" class="ability-list">
      <Ability v-for="data in pokemonData" :data="data" :key="`ability-${data.name}`"/>
    </div>
    <div class="block-bottom">
      <button class="button button-primary" @click="copy(pokemon)">
        Share to my friends
      </button>
      <p @click="check(pokemon)" class="start">
        <i :class="`bi bi-star-fill icon-star-list ${!pokemon.favorite || 'check'}`" aria-label="star icon"></i>
      </p>
    </div>
  </b-modal>
</template>
<script setup>
  import { computed, watch } from 'vue';
  import { usePokemonStore } from '../../stores/pokemon';
  import Ability from './DetailPokemon/Ability.vue';

  const pokemonStore = usePokemonStore();

  const showModal = computed({
    get: () => pokemonStore.showModalPokemon,
    set: (val) => pokemonStore.setShowModalPokemon(val),
  });

  const pokemon = computed(() => pokemonStore.pokemon);

  const pokemonData = computed(() => {
    const p = pokemonStore.pokemon;
    return [
      {
        name: 'Name: ',
        value: toCapitalizedCase(p?.name),
      },
      {
        name: 'Weight: ',
        value: p?.weight,
      },
      {
        name: 'Height: ',
        value: p?.height,
      },
      {
        name: 'Types: ',
        value: getTypes(p?.types),
      },
    ];
  });
  const urlImageItem = computed(() => pokemon?.value?.sprites?.other['official-artwork']?.front_default);

  const resetModal = () => {
    pokemonStore.setShowModalPokemon(false);
  };

  const getTypes = (array) => {
    if (!array || array.length === 0) {
      return 'None';
    }

    return array.reduce((oldValue, newValue, index) => {
      if (newValue.type && newValue.type.name) {
        return oldValue.concat(toCapitalizedCase(newValue.type.name), index === array.length - 1 ? '' : ', ');
      }
      return oldValue;
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

  const toCapitalizedCase = (str) => {
    if (typeof str !== 'string') {
      return '';
    }

    return str
      .split(/\s+/)
      .filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const disableBodyScroll = () => {
    document.body.classList.add('no-scroll');
  };

  const enableBodyScroll = () => {
    resetModal();
    document.body.classList.remove('no-scroll');
  };

  const copy = async (pokemon) => {
    const text = `Name: ${pokemon.name}, Weight: ${pokemon.weight}, Height: ${pokemon.height}, Types: ${getTypes(pokemon.types)}.`;

    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`Text copied to clipboard: ${text}`);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  watch(showModal, (newValue) => {
    if (newValue) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  });

</script>
