<template>
  <div>
    <div class="loader" v-show="loader">
      <div class="spin reel">
        <img class="image-loader" src="~/assets/images/loader.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useCommonStore } from '~/stores/common';

  // Usar el store de Pinia
  const commonStore = useCommonStore();

  // Acceder al estado del loader desde Pinia
  const loader = computed(() => {
    return commonStore.loader;
  })
</script>
