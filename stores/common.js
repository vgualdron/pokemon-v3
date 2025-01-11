// stores/useLoader.js
import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
  // Definir el estado
  state: () => ({
    loader: false
  }),

  // Definir las acciones
  actions: {
    setLoader(value) {
      this.loader = value;
    },
  }
});
