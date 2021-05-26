<template>
  <nav
    class="
      flex flex-row
      justify-between
      bg-gray-700
      lg:px-64
      py-3
      px-3
      align-middle
      shadow-md
    "
  >
    <div>
      <label class="font-extrabold text-2xl text-white"
        ><router-link :to="{ name: 'Home' }">my-clients-data</router-link></label
      >
    </div>

    <div class="text-xl text-blue-100 :hover:text-blue-900 space-x-3">
      <!-- <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link> -->
      <router-link class="hover:text-white" :to="{ name: 'Login' }"
        >login</router-link
      >
      <router-link class="hover:text-white" :to="{ name: 'Signup' }"
        >signup</router-link
      >
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
