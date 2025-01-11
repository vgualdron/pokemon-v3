<template>
  <div class="input-search input-group">
    <span class="input-group-text">
      <i class="bi bi-search"></i>
    </span>
    <input
      type="search"
      placeholder="Search"
      v-model="value"
    />
  </div>
</template>

<script setup>
import { usePokemonStore } from '~/stores/pokemon';

const pokemonStore = usePokemonStore();
const value = computed({
  get: () => pokemonStore.search,
  set: (val) => pokemonStore.setSearch(val),
});
</script>
