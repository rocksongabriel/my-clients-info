<template>
  <!--
    TODO - add icons to the links, and style the links differently
    -->
  <footer
    class="
      bg-gray-800
      lg:px-20
      py-8
      p-3
      flex
      lg:flex-row
      flex-col
      justify-between
      mt-16
      align-middle
    "
    style=""
  >
    <div class="mb-7 lg:mb-0 lg:w-1/2">
      <h1
        class="text-2xl lg:text-3xl font-extrabold text-center p-2 text-white"
      >
        Get to hear of my upcoming mega project first
      </h1>
      <form class="mt-3 w-full">
        <label for="email3" class="text-white text-xl font-extrabold"
          >Email Address</label
        >
        <br />
        <input
          type="email"
          name="email3"
          id="email3"
          class="p-3 w-full"
          placeholder="my_address@domain.com"
        />
        <button class="btn-success w-full mt-3">Join Newsletter</button>
      </form>
    </div>

    <div
      class="
        text-white text-base
        md:text-lg
        mb-4
        lg:mb-0
        flex flex-col
        justify-between
      "
    >
      <p class="text-center">
        Built with <span class="text-red-800">&#10084;</span> by:
        <span class="text-yellow-500">{{ my_name }}</span>
      </p>
      <p class="">
        Github:
        <a class="text-blue-600" href="https://github.com/rocksongabriel"
          >https://github.com/rocksongabriel</a
        >
      </p>
      <p class="">
        LinkedIn:
        <a class="text-blue-600" href="http://linkedin.com/gabrielrockson"
          >http://linkedin.com/gabrielrockson</a
        >
      </p>
      <p class="">
        Twitter:
        <a class="text-blue-600" href="http://twitter.com/gabe_rockson"
          >http://twitter.com/gabe_rockson</a
        >
      </p>
      <p class="">
        Email:
        <a class="text-blue-600" href="mailto:thegabrielrockson@gmail.com"
          >thegabrielrockson@gmail.com</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      my_name: "Gabriel Rockson",
    };
  },
};
</script>
