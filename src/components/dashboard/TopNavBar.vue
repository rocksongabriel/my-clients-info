<template>
  <nav class="bg-gray-800 shadow-2xl">
    <div class="flex justify-between px-2 md:px-6 py-4">
      <div>
        <!-- logo -->
        <router-link
          class="text-lg md:text-xl font-bold text-gray-100"
          :to="{ name: 'Home' }"
          >my-clients-data</router-link
        >
      </div>

      <div class="space-x-2">
        <!-- user welcome message and logout button -->
        <span class="text-gray-300 font-sans"
          ><span class="font-bold">Welcome</span> <span>{{ userData.username }}</span></span
        >
        <font-awesome-icon class="text-green-400 text-xl" icon="user" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TopNavBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userData"]),
  },
};
</script>
