<template>
  <div id="login">
    <h1 class="">login</h1>
    <form @submit.prevent>
      <label for="email1">Email</label> <br />
      <input
        type="email"
        name="email"
        id="email1"
        placeholder="youremail@domain.com"
        v-model.trim="loginForm.email"
        class="input"
      />
      <br />

      <label for="password1">Password</label> <br />
      <input
        type="password"
        name="password"
        id="password1"
        placeholder="***********"
        v-model.trim="loginForm.password"
        class="input"
      />
      <br />

      <button
        class="bg-purple font-bold text-black text-xl p-3"
        type="submit"
        @click="login()"
      >
        Login
      </button>
      <div>
        <a href="">Forgot password</a> |
        <a href="">Create account</a>
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
