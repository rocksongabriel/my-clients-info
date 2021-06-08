// import firebase from "firebase/app";
import router from "@/router/index";

import "firebase/auth";
import "firebase/firestore";

import { auth, usersCollection } from "../../../firebase";

const actions = {
  async login({ commit, dispatch }, form) {
    await auth
      .signInWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // fetch the user profile
        dispatch("fetchUserProfile", user);
        // go to the dashboard
        router.push({ name: "Dashboard" });
        // set message
        commit("UPDATE_MESSAGE", "Login successful");
        // remove errors
        commit("REMOVE_ERRORS");
      })
      .catch((error) => {
        commit("UPDATE_ERRORS", error);
      });
  },
  async signup({ commit, dispatch }, form) {
    // sign user up
    await auth
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // create user profile object in userCollections
        usersCollection.doc(user.uid).set({
          username: form.username,
          email: form.email,
        });
        // fetch user data
        dispatch("fetchUserProfile", user);
        // go to dashboard
        router.push({ name: "Dashboard" });
        // set message
        commit("UPDATE_MESSAGE", "Account created successfully");
        // remove erros
        commit("REMOVE_ERRORS");
      })
      .catch((error) => {
        commit("UPDATE_ERRORS", error);
      });
  },
  async fetchUserProfile({ commit }, user) {
    await usersCollection
      .doc(user.uid)
      .get()
      .then((userProfile) => {
        commit("SET_USER_PROFILE", userProfile.data());

        // remove erorrs
        commit("REMOVE_ERRORS");
      })
      .catch((error) => {
        commit("UPDATE_ERRORS", error);
      });
  },
  async logout({ commit }) {
    await auth
      .signOut()
      .then(() => {
        // remove persisted data from local storage
        window.localStorage.removeItem("my-clients-info");
        // take the user to the login page after sign out
        router.push({ name: "Login" });
        // set message 
        commit("UPDATE_MESSAGE", "You have been signed out successfully");
      })
      .catch((error) => {
        commit("UPDATE_ERRORS", error);
      });
  },
};

const mutations = {
  SET_USER_PROFILE(state, payload) {
    state.user = payload;
  },
  UPDATE_ERRORS(state, payload) {
    state.errors = {};
    state.errors.code = payload.code;
    state.errors.message = payload.message;
  },
  REMOVE_ERRORS(state) {
    state.errors = {};
  },
  UPDATE_MESSAGE(state, payload) {
    state.message = payload;
  },
  REMOVE_MESSAGES(state) {
    state.message = {};
  }
};

const state = {
  user: {},
  errors: {
    code: null,
    message: null,
  },
  message: null,
};

const getters = {
  userData: (state) => state.user,
  userErrors: (state) => state.errors,
  userMessage: (state) => state.message,
};

export default {
  actions,
  mutations,
  state,
  getters,
};
