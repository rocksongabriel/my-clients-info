<template>
  <div class="flex justify-around">
    <form
      class="bg-gray-300 p-8 shadow-2xl mt-16 md:w-1/2 w-5/6 lg:w-2/5"
      @submit.prevent
    >
      <div class="flex justify-around">
        <img
          class="rounded-full shadow-2xl"
          src="../assets/avatar4.png"
          alt=""
          style="height: 80px; width: 80px"
        />
      </div>

      <div class="mt-2">
        <label for="username" class="form-label">Username</label> <br />
        <input
          type="text"
          name="username"
          id="username"
          v-model.trim="signupForm.username"
          class="input"
        />
      </div>

      <div class="mt-3">
        <label for="email2" class="form-label">Email</label> <br />
        <input
          type="email"
          name="email"
          id="email2"
          v-model.trim="signupForm.email"
          class="input"
        />
      </div>

      <div class="mt-3">
        <label for="password2" class="form-label">Password</label> <br />
        <input
          type="password"
          name="password"
          id="password2"
          v-model.trim="signupForm.password"
          class="input"
        />
      </div>

      <button @click="signup()" class="btn-primary w-full my-4">Signup</button>

      <div class="flex justify-around">
        <span class="text-blue-600 font-medium text-lg"
          ><router-link :to="{ name: 'Login' }"
            >already have an account
          </router-link></span
        >
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
