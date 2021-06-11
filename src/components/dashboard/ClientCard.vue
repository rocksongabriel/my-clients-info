<template>
  <div class="p-5 bg-gray-600 rounded-sm shadow-lg text-white">
    <p class="text-2xl font-extrabold font-gray-300 text-center mb-2">
      {{ client["Company Name"] }}
    </p>

    <div v-if="show_less">
      <p v-for="(value, key, idx) in client" :key="key">
        <template v-if="idx <= 5">
          <span class="font-bold text-green-300 font-lg">{{ key }}: </span>
          <span>{{ value }}</span>
        </template>
      </p>
    </div>
    <div v-else>
      <p v-for="(value, key) in client" :key="key">
        <template>
          <span class="font-bold text-green-300 font-lg">{{ key }}: </span>
          <span>{{ value }}</span>
        </template>
      </p>
    </div>

    <p class="text-center mt-5">
      <button
        class="
          text-yellow-400 text-lg
          font-bold
          focus:outline-none
          hover:text-yellow-500
        "
        @click="show_less = !show_less"
        v-if="show_less"
      >
        <font-awesome-icon :icon="['fas', 'arrow-down']" /> view all
      </button>
      <button
        class="
          text-yellow-400 text-lg
          font-bold
          focus:outline-none
          hover:text-yellow-500
        "
        @click="show_less = !show_less"
        v-if="!show_less"
      >
        <font-awesome-icon :icon="['fas', 'arrow-up']" /> view less
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "ClientCard",

  data() {
    return {
      show_less: true,
    };
  },

  props: ["client"],
  components: {},
};
</script>
