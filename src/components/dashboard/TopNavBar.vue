<template>
  <nav class="bg-gray-800">
    <div class="flex justify-between px-2 md:px-6 py-4">
      <div>
        <!-- logo -->
        <router-link
          class="text-lg font-bold font-sans text-white"
          to="{ name: 'Home' }"
          >my-clients-data</router-link
        >
      </div>

      <div>
        <!-- user welcome message and logout button -->
        <span>Welcome gabriel</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNavBar",
  data() {
    return {};
  },
};
</script>
