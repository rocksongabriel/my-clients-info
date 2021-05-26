<template>
  <div class="home">
    <Navbar />

    <!-- This is the content that loads when someone visits the homepage -->
    <div v-show="$route.path == '/'" class="lg:px-64 md:px-12">
      <h1 class="text-center font-bold text-gray-900 text-5xl md:text-8xl py-8">
        Manually scouting for freelance clients online and looking for a place
        to enter and store the data quickly?
      </h1>

      <h1
        class="
          text-center
          font-semibold
          text-gray-800 text-3xl
          md:text-6xl
          py-10
        "
      >
        Utilize <span class="text-yellow-500">my-clients-data</span> to make
        your work easier
      </h1>
      <div class="flex justify-around">
        <router-link
          :to="{ name: 'Signup' }"
          class="
            px-6
            py-3
            bg-red-700
            text-xl
            md:text-2xl
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
    <!-- Links related to the website aspect of the project will be loaded here -->
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
