<template>
  <div>
    <form class="container" @submit.prevent>
      <h1>Signup</h1>

      <label for="username">Username</label> <br />
      <input
        type="text"
        name="username"
        id="username"
        v-model.trim="signupForm.username"
        class="input"
      />
      <br />

      <label for="email2">Email</label> <br />
      <input
        type="email"
        name="email"
        id="email2"
        v-model.trim="signupForm.email"
        class="input"
      />
      <br />

      <label for="first_name">First Name</label> <br />
      <input
        type="text"
        name="first_name"
        id="first_name"
        v-model.trim="signupForm.first_name"
        class="input"
      />
      <br />

      <label for="last_name">Last Name</label> <br />
      <input
        type="text"
        name="last_name"
        id="last_name"
        v-model.trim="signupForm.last_name"
        class="input"
      />
      <br />

      <label for="password2">Password</label> <br />
      <input
        type="password"
        name="password"
        id="password2"
        v-model.trim="signupForm.password"
        class="input"
      />
      <br />

      <button
        @click="signup()"
        class="px-4 py-2 font-bold bg-purple-900 text-black"
      >
        Signup
      </button>
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
        first_name: "",
        last_name: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        username: this.signupForm.username,
        email: this.signupForm.email,
        first_name: this.signupForm.first_name,
        last_name: this.signupForm.last_name,
        password: this.signupForm.password,
      });
    },
  },
};
</script>
