<template>
  <b-input-group size="sm" class="mt-5">
    <b-input-group-prepend is-text id="input-search">
      <b-icon-search></b-icon-search>
    </b-input-group-prepend>
    <b-form-input type="search" placeholder="Search" id="input-search" v-model="value"></b-form-input>
  </b-input-group>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { BIconSearch } from 'bootstrap-vue';

export default {
  components: {
    BIconSearch
  },
  computed: {
    ...mapState('pokemon', [
      'search'
    ]),
    value: {
      get () {
        return this.search;
      },
      set (value) {
        this.setSearch(value);
      }
    }
  },
  async mounted () {
  },
  methods: {
    ...mapActions('pokemon', [
      'setSearch'
    ])
  }
};
</script>
