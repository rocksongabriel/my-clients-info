import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import users from "./users/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
  },
  plugins: [
    createPersistedState({
      key: "my-clients-info",
    }),
  ],
});
