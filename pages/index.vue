<template>
  <div>
    <ImageWelcome />
    <h6 class="title">
      Welcome to Pokédex
    </h6>
    <h6 class="subtitle">
      The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
    </h6>
    <div class="link-get-started">
      <b-button pill variant="danger" @click="getStarted">Get started</b-button>
    </div>
  </div>
</template>

<script>
import ImageWelcome from '../components/ImageWelcome';
export default {
  name: 'Welcome',
  components: {
    ImageWelcome
  },
  methods: {
    getStarted (event) {
      event.preventDefault();
      this.$router.push({ path: '/home' });
    }
  }
};
</script>
