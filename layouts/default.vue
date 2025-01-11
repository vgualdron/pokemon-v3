<template>
  <div>
    <NuxtPage />
    <Loader />
  </div>
</template>
<script>
import Loader from '../components/common/Loader';
export default {
  components: {
    Loader,
  }
};
</script>
