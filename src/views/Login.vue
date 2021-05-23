<template>
  <div id="login" class="flex justify-around">
    <form @submit.prevent class="bg-gray-300 p-8 shadow-2xl mt-16 lg:w-1/4">
      <!-- <h1 class="text-5xl font-mono font-extrabold text-black py-3 text-center">
        LOGIN
      </h1> -->
      <div class="flex justify-around">
        <img
          class="rounded-full shadow-2xl"
          src="../assets/avatar4.png"
          alt=""
          style="height: 80px; width: 80px"
        />
      </div>

      <div class="mt-2">
        <label for="email1" class="form-label">Email</label> <br />
        <input
          type="email"
          name="email"
          id="email1"
          placeholder="youremail@domain.com"
          v-model.trim="loginForm.email"
          class="input"
        />
      </div>

      <div class="mt-3 mb-4">
        <label for="password1" class="form-label">Password</label> <br />
        <input
          type="password"
          name="password"
          id="password1"
          placeholder="***********"
          v-model.trim="loginForm.password"
          class="input"
        />
      </div>

      <button class="btn-success w-full mb-5" type="submit" @click="login()">
        Login
      </button>

      <div class="flex justify-between text-center">
        <span class="text-blue-600 font-medium text-lg"
          ><router-link :to="{ name: 'Home' }"
            >forgot password
          </router-link></span
        >
        |
        <span class="text-blue-600 font-medium text-lg"
          ><router-link :to="{ name: 'Signup' }"
            >create account
          </router-link></span
        >
      </div>
    </form>
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
