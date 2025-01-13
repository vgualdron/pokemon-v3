<template>
  <div class="not-found">
    <h6 class="title">
      Uh-oh!
    </h6>
    <h6 class="subtitle">
      You look lost on your journey!
    </h6>
    <div class="btn-go-back">
      <button class="button button-primary" @click="clearSearch">Go back home</button>
    </div>
  </div>
</template>

<script setup>
  import { usePokemonStore } from '../../stores/pokemon';
  const pokemonStore = usePokemonStore();
  const clearSearch = () => {
    pokemonStore.setSearch('');
  };
</script>
