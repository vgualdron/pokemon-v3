<template>
  <div class="home">
    <div class="container">
      <InputSearch />
      <div v-if="items.length > 0" class="list-items">
        <Item
          v-for="(item, index) in items"
          :key="`${index.toString()}-${item.name}`"
          :item="item" />
      </div>
      <NotFoundItems v-else />
    </div>
    <NavbarFixedBottom :disabledFavorites="disabledFavorites"/>
    <ModalDetailPokemon />
  </div>
</template>

<script setup>
  import { computed, onMounted, onUnmounted, watch } from 'vue';
  import { usePokemonStore } from '../stores/pokemon';
  import { useCommonStore } from '../stores/common';
  import InputSearch from '../components/home/InputSearch';
  import Item from '../components/home/Item';
  import NotFoundItems from '../components/home/NotFoundItems';
  import NavbarFixedBottom from '../components/home/NavbarFixedBottom';
  import ModalDetailPokemon from '../components/home/ModalDetailPokemon';

  const pokemonStore = usePokemonStore();
  const commonStore = useCommonStore();

  const showFavorites = computed(() => pokemonStore.showFavorites);
  const search = computed(() => pokemonStore.search);
  const pokemons = computed(() => pokemonStore.pokemons);
  const disabledFavorites = computed(() => {
    const favoritePokemons = pokemons.value?.results?.filter(item => item.favorite);
    return favoritePokemons?.length <= 0;
  });

  const items = computed(() => {
    const results = pokemons.value?.results || [];
    let filteredItems = showFavorites.value
      ? results.filter(item => item.favorite)
      : results;
    return filteredItems.filter(item =>
      item.name.toLowerCase().includes(search.value.toLowerCase())
    );
  });

  const seeMore = async () => {
    if (!pokemonStore.showFavorites) {
      let url = null;
      if (pokemonStore.pokemons && pokemonStore.pokemons.next) {
        url = pokemonStore.pokemons.next;
      }
      await commonStore.setLoader(true);
      await pokemonStore.findAll(url);
      await commonStore.setLoader(false);
    }
  };

  const handleScroll = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition + viewportHeight >= documentHeight) {
      seeMore();
    }
  };

  watch(disabledFavorites, (newValue) => {
    if (newValue) {
      pokemonStore.setShowFavorites(false);
    }
  });

  onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
    commonStore.setLoader(true);
    await pokemonStore.findAll();
    commonStore.setLoader(false);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>
