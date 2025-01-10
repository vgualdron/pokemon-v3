<template>
  <div class="modal-pokemon">
    <b-modal @hidden="resetModal" v-model="showModal" scrollable centered>
        <div class="text-center">
          <img class="image-background-modal" src="~/assets/images/background-modal.png" />
          <img class="image-pokemon-modal" :src="urlImageItem" />
        </div>
        <div class="data content-name">
          <h3>Name:</h3>
          <p> {{pokemon.name}} </p>
        </div>
        <div class="data content-name">
          <h3>Weight:</h3>
          <p> {{pokemon.weight}} </p>
        </div>
        <div class="data content-name">
          <h3>Height:</h3>
          <p> {{pokemon.height}} </p>
        </div>
        <div class="data content-name" v-if="pokemon && pokemon.types">
          <h3>Types:</h3>
          <p> {{ getTypes(pokemon.types) }} </p>
        </div>
        <div class="data btn-share">
          <b-button pill variant="danger" class="my-sm-0" @click="copy(pokemon)">
            Share to my friends
          </b-button>
          <p @click="check(pokemon)">
            <b-icon-star-fill :class="pokemon.favorite ? 'icon-star-list check' : 'icon-star-list'"></b-icon-star-fill>
          </p>
        </div>
    </b-modal>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { BIconStarFill } from 'bootstrap-vue';
export default {
  components: {
    BIconStarFill
  },
  computed: {
    ...mapState('pokemon', [
      'pokemon',
      'pokemons',
      'showModalPokemon'
    ]),
    showModal: {
      get () {
        return this.showModalPokemon;
      },
      set (newValue) {
        return newValue;
      }
    },
    urlImageItem: {
      get () {
        return this.pokemon?.sprites?.other['official-artwork']?.front_default;
      },
      set (newValue) {
        return newValue;
      }
    }
  },
  methods: {
    ...mapActions('pokemon', [
      'setShowModalPokemon',
      'setPokemons',
      'setPokemon'
    ]),
    resetModal () {
      this.setShowModalPokemon(false);
    },
    getTypes (array) {
      return array.reduce((oldValue, newValue, index) => {
        return oldValue.concat(newValue.type.name, (index === array.length - 1) ? '' : ', ');
      }, '');
    },
    check (item) {
      const results = this.pokemons.results.map((pokemon) => {
        if (pokemon.name === item.name) {
          pokemon.favorite = !pokemon.favorite;
        }
        return pokemon;
      });

      this.setPokemon(
        {
          ...item,
          favorite: !item.favorite
        }
      );

      const items = {
        ...this.pokemons,
        results
      };
      this.setPokemons(items);
    },
    copy (pokemon) {
      const name = 'Name: '.concat(pokemon.name);
      const weight = 'Weight: '.concat(pokemon.weight);
      const height = 'Height: '.concat(pokemon.height);
      const types = 'Types: '.concat(this.getTypes(pokemon.types));
      const text = name.concat(', ', weight, ', ', height, ', ', types, '.');
      navigator.clipboard.writeText(text);
      this.$bvToast.toast(text, {
        title: 'Texto copiado en el portapapeles',
        variant: 'success',
        solid: true
      });
    }
  }
};
</script>
