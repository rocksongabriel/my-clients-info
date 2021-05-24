<template>
  <div>
    <TopNavBar />
    <h1>This is the Dashboard</h1>
    <h2 class="text-blue-800">Welcome: {{ userData.username }}</h2>
    <button
      class="py-2 px-4 text-white bg-red-600 font-extrabold"
      @click="logout()"
    >
      logout
    </button>
  </div>
</template>
d
<script>
import { mapGetters } from "vuex";
import TopNavBar from "../components/dashboard/TopNavBar";

export default {
  name: "Login",
  data() {
    return {};
  },
  components: {
    TopNavBar,
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
