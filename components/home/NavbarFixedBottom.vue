<template>
  <b-navbar-nav class="navbar-fixed">
    <b-nav-form class="navbar-form container">
      <button
        :class="`button ${!pokemonStore.showFavorites ? 'button-primary' : 'button-secondary'}`"
        @click="setFavorites(false)">
        <i class="bi bi-list-ul"></i> All
      </button>
      <button
        :class="`button ${pokemonStore.showFavorites ? 'button-primary' : 'button-secondary'}`"
        @click="setFavorites(true)"
        :disabled="props.disabledFavorites">
        <i class="bi bi-star-fill"></i> Favorites
      </button>
    </b-nav-form>
  </b-navbar-nav>
</template>

<script setup>
import { usePokemonStore } from '~/stores/pokemon';
import { defineProps } from 'vue';

const props = defineProps({
  disabledFavorites: {
    type: Boolean,
    default: true
  }
});

// Usar el store de Pinia
const pokemonStore = usePokemonStore();

// Función para manejar los favoritos
const setFavorites = (value) => {
  pokemonStore.setShowFavorites(value);
};
</script>
