<template>
  <div class="flex justify-around">
    <form class="bg-white shadow-2xl p-12 mt-10 mb-4" @submit.prevent>
      <div class="flex justify-around">
        <img
          class="rounded-full shadow-2xl"
          src="../assets/avatar4.png"
          alt=""
          style="height: 60px; width: 60px"
        />
      </div>

      <h1
        class="
          text-gray
          font-thin
          text-center
          my-2
          text-xl
          border-b-2 border-gray-800
        "
      >
        Welcome to our platform
      </h1>

      <div class="mb-4">
        <label for="username" class="form-label-2">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          v-model.trim="signupForm.username"
          class="form-input-2"
        />
      </div>

      <div class="mb-4">
        <label for="email2" class="form-label-2">Email</label>
        <input
          type="email"
          name="email"
          id="email2"
          v-model.trim="signupForm.email"
          class="form-input-2"
        />
      </div>

      <div class="mb-4">
        <label for="password2" class="form-label-2">Password</label>
        <input
          type="password"
          name="password"
          id="password2"
          v-model.trim="signupForm.password"
          class="form-input-2"
        />
      </div>

      <div class="flex items-center justify-between">
        <button
          class="
            bg-green-500
            hover:bg-green-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none
            focus:shadow-outline
          "
          type="button"
          @click="signup()"
        >
          register
        </button>

        <router-link
          class="
            inline-block
            align-baseline
            font-bold
            text-lg text-blue-500
            hover:text-blue-800
            ml-4
          "
          :to="{ name: 'Login' }"
          >already have an account
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      signupForm: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        username: this.signupForm.username,
        email: this.signupForm.email,
        password: this.signupForm.password,
      });
    },
  },
};
</script>
