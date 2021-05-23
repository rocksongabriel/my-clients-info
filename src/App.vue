<template>
  <div id="app">
    <Navbar />

    <div class="">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped
</style>
