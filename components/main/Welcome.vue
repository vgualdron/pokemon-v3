<template>
  <div class="welcome text-center">
    <img class="image" src="~/assets/images/pikachu-welcome.png" />
    <h6 class="title">
      Welcome to Pokédex
    </h6>
    <h6 class="subtitle">
      The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
    </h6>
    <div class="link-get-started">
      <button class="button button-primary" @click="getStarted">Get started</button>
    </div>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  import { useCommonStore } from '../stores/common';
  import CommonHelper from '~/helpers/CommonHelper';

  const commonStore = useCommonStore();
  const commonHelper = new CommonHelper();
  const router = useRouter();

  const getStarted = (event) => {
    event.preventDefault();
    router.push({ path: '/home' });
  };

  onMounted(async () => {
    commonStore.setLoader(true);
    await commonHelper.delay(1000);
    commonStore.setLoader(false);
  })

</script>
