import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
  state: () => ({
    loader: false
  }),

  actions: {
    setLoader(value) {
      this.loader = value;
    },
  }
});
