import * as firebase from "firebase/app";
import router from "@/router/index";

const state = {
  usersProfile: {},
};

const actions = {
  async login({ dispatch }, form) {
    const { user } = await firebase.auth.signInWithEmailAndPassword(
      form.email,
      form.password
    );

    // fetch user profile and set in state
    dispatch("fetchUserProfile", user);
  },
  async fetchUserProfile({ commit }, user) {
    // fetch user profile
    const userProfile = await firebase.usersCollection.doc(user.uid).get();

    // commit user profile to state
    commit("SET_USER_PROFILE", userProfile.data());

    // change route to dashboard
    router.push({ name: "Dashboard" });
  },
};

const mutations = {
  SET_USER_PROFILE({ state }, payload) {
    state.userProfile = payload;
  },
};

const getters = {};

const usersModule = {
  state,
  actions,
  mutations,
  getters,
};

export default usersModule;
