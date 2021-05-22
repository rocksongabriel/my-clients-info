// import firebase from "firebase/app";
import router from "@/router/index";

import "firebase/auth";
import "firebase/firestore";

import { auth, usersCollection } from "../../../firebase";

const state = {
  userProfile: {},
};

const actions = {
  async login({ dispatch }, form) {
    const { user } = await auth.signInWithEmailAndPassword(
      form.email,
      form.password
    );

    // fetch user profile and set in state
    dispatch("fetchUserProfile", user);
  },
  async signup({ dispatch }, form) {
    // sign user up
    console.log(form);
    const { user } = await auth.createUserWithEmailAndPassword(
      form.email,
      form.password
    );

    // create user profile object in userCollections
    await usersCollection.doc(user.uid).set({
      username: form.username,
      first_name: form.first_name,
      last_name: form.last_name,
    });

    // fetch user data
    dispatch("fetchUserProfile", user);
  },
  async fetchUserProfile({ commit }, user) {
    // fetch user profile
    const userProfile = await usersCollection.doc(user.uid).get();

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
