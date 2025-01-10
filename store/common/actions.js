const actions = {
  async setLoader ({ commit }, data) {
    return await new Promise(function (resolve, reject) {
      commit('SET_LOADER', data);
      resolve(true);
    });
  }
};
export default actions;
