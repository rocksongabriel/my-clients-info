<template>
  <div class="home">
    <Navbar />

    <div v-show="$route.path == '/'" class="p-12 mx-10">
      <h1 class="text-center font-bold text-gray-900 text-8xl py-8">
        Manually scouting for freelance clients online and looking for a place
        to enter the data quickly?
      </h1>

      <h1 class="text-center font-semibold text-gray-800 text-7xl py-12 mx-5">
        Utilize my-clients-data to make your work easier
      </h1>
      <div class="flex justify-around">
        <router-link
          :to="{ name: 'Signup' }"
          class="
            p-6
            bg-red-600
            text-3xl
            font-bold
            text-white
            rounded-md
            animate-pulse
            text-center
          "
          >Register Now</router-link
        >
      </div>
    </div>
    <div>
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
