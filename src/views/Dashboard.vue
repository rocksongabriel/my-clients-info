<template>
  <div>
    <h1>This is the Dashboard</h1>
    <h2 class="text-blue-800">Welcome: {{ userData.first_name }}</h2>
    <button class="py-2 px-4 text-white bg-red-600 font-extrabold" @click="logout()">logout</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userData"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
