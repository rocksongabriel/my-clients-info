<template>
  <footer
    class="
      bg-gray-900
      lg:p-10
      p-3
      flex
      lg:flex-row
      flex-col
      justify-between
      mt-12
      p-3
    "
    style="margin-bottom: -200px"
  >
    <div class="mb-7 lg:mb-0">
      <h1 class="text-xl text-white">
        Get to hear of my upcoming mega project first
      </h1>
      <form class="mt-3">
        <label for="email3" class="text-white text-2xl font-extrabold"
          >Email Address</label
        >
        <br />
        <input type="email" name="email3" id="email3" class="input" />
        <button
          class="
            px-2
            py-3
            text-yellow-50
            font-black
            bg-green-800
            text-2xl
            mt-3
            w-full
          "
        >
          Join Newsletter
        </button>
      </form>
    </div>

    <div class="text-white text-xl mb-4 lg:mb-0">
      Built with love by:
      <span class="text-yellow-500">{{ my_name }}</span>
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
