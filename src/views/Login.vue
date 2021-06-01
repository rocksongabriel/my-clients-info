<template>
  <div id="login" class="flex justify-around">
    <div class="w-full max-w-xs">
      <form @submit.prevent class="bg-white shadow-md rounded p-12 mb-4 mt-10">
        <!-- <h1 class="text-5xl font-mono font-extrabold text-black py-3 text-center">
        LOGIN
      </h1> -->

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
            text-gray-800
            font-thin
            text-center
            my-2
            text-xl
            border-b-2 border-gray-800
          "
        >
          Welcome Back
        </h1>

        <div class="mb-4">
          <label class="form-label-2" for="email1"> Email </label>
          <input
            class="form-input-2 focus:border-blue-400 border-2"
            id="email1"
            type="email"
            placeholder="youremail@address.com"
            v-model.trim="loginForm.email"
          />
        </div>

        <div class="mb-4">
          <label class="form-label-2" for="password1"> Password </label>
          <input
            class="form-input-2 focus:border-blue-400 border-2"
            id="password1"
            type="password"
            placeholder="****************"
            v-model.trim="loginForm.password"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none
              focus:shadow-outline
            "
            type="button"
            @click="login()"
          >
            login
          </button>
          <a
            class="
              inline-block
              align-baseline
              font-bold
              text-sm text-blue-500
              hover:text-blue-800
            "
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
  },
};
</script>
