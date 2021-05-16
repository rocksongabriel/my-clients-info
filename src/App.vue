<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
