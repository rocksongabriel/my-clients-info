<template>
  <div>
    <div class="flex flex-nowrap overflow-x-auto bg-green-900 shadow-xl">
      <div
        class="flex flex-col border-r-2 border-gray-400 px-4"
        style="flex: 0 0 auto"
        v-for="(value, name) in client"
        :key="name"
      >
        <p class="text-base py-2 font-medium text-gray-100">{{ name }}</p>
        <p class="text-xl text-white font-bold pb-3">{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientCard",
  props: ["client"],
  components: {},
};
</script>
