<template>
  <div class="p-5 bg-gray-600 rounded-sm shadow-lg text-white">
    <p class="text-2xl font-extrabold font-gray-300 text-center mb-2">
      {{ client["Company Name"] }}
    </p>
    <p class="py-2">
      <span class="font-bold text-green-300 font-lg">Owner Name: </span>
      <span>{{ client["Owner Name"] }}</span>
    </p>
    <p class="py-2">
      <span class="font-bold text-green-300 font-lg">Contact Name: </span>
      <span>{{ client["Contact Name"] }}</span>
    </p>
    <p class="py-2">
      <span class="font-bold text-green-300 font-lg">Contact Email: </span>
      <span>{{ client["Contact Email"] }}</span>
    </p>
    <p class="py-2">
      <span class="font-bold text-green-300 font-lg">Contact Phone: </span>
      <span>{{ client["Contact Phone"] }}</span>
    </p>
    <p class="text-center mt-5">
      <a href="#" class="text-red-400 text-lg font-bold">View all info</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "ClientCard",
  props: ["client"],
  components: {},
};
</script>
