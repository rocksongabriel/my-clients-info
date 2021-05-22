<template>
  <div id="app">
    <div id="nav" class="text-blue-600 text-xl font-bold underline p-2">
      <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link> |
      <router-link :to="{ name: 'Signup' }">Signup</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
