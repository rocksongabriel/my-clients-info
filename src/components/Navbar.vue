<template>
  <nav class="flex flex-row justify-between bg-gray-800 lg:px-16 py-4 px-2">
    <div>
      <label class="font-bold text-3xl text-white"
        ><router-link :to="{ name: 'Home' }">MCD</router-link></label
      >
    </div>

    <div class="text-2xl text-blue-300 :hover:text-blue-900 space-x-2">
      <!-- <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link> -->
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-link :to="{ name: 'Signup' }">Signup</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
