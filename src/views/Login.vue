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
            text-gray-800 text-center
            my-2
            text-xl
            font-bold
            border-b-2 border-gray-800
          "
        >
          Welcome Back
        </h1>

        <!-- rendering backend thrown errors -->
        <div v-if="userErrors.message" class="my-3">
          <p class="error-text">{{ userErrors.message }}</p>
        </div>

        <!-- username -->
        <div class="mb-4">
          <label class="form-label-2" for="email1"> Email </label>
          <input
            class="form-input-2 focus:border-blue-400 border-2"
            id="email1"
            type="email"
            placeholder="youremail@address.com"
            v-model.trim="loginForm.email"
            :class="{
              'error-field':
                (submitted && !$v.loginForm.email.required) ||
                (submitted && !$v.loginForm.email.email),
            }"
          />
          <!-- rendering email field related errors -->
          <!-- rendering the frontend validation errors -->
          <p
            class="error-text"
            v-if="submitted && !$v.loginForm.email.required"
          >
            Email field is required
          </p>
          <p class="error-text" v-if="submitted && !$v.loginForm.email.email">
            This field should be an email
          </p>
        </div>

        <!-- password field --->
        <div class="mb-4">
          <label class="form-label-2" for="password1"> Password </label>
          <input
            class="form-input-2 focus:border-blue-400 border-2"
            id="password1"
            type="password"
            placeholder="****************"
            v-model.trim="loginForm.password"
            :class="{
              'error-field': submitted && !$v.loginForm.password.required,
            }"
          />
          <!-- rendering the password field related errors -->
          <!-- rendering the frontend validation errors -->
          <p
            class="error-text"
            v-if="submitted && !$v.loginForm.password.required"
          >
            Password field is required
          </p>
          <!-- rendering backend validation errors -->
          <div v-if="userErrors.message" class="my-2">
            <p class="error-text">
              Please check your email and password and try again
            </p>
          </div>
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
            <font-awesome-icon
              v-if="loading"
              class="text-black"
              :class="{ 'animate-spin': loading }"
              :icon="['fas', 'spinner']"
            />
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
import { mapGetters, mapMutations } from "vuex";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      submitted: false,
      loading: false,
    };
  },
  validations: {
    loginForm: {
      email: { required, email },
      password: { required },
    },
  },
  computed: {
    ...mapGetters(["userErrors"]),
  },
  methods: {
    ...mapMutations(["REMOVE_ERRORS"]),

    login() {
      try {
        this.submitted = true;
        this.$v.$touch();

        if (!this.$v.loginForm.$error) {
          // set loading to true
          this.loading = true;
          // remove the existing errors
          this.REMOVE_ERRORS();
          // call the login action
          this.$store.dispatch("login", {
            email: this.loginForm.email,
            password: this.loginForm.password,
          });
        }
      } catch (error) {
        console.log(error);
        this.loading = false; // set loading to false
      }
    },
  },
  mounted() {
    // remove the errors
    this.REMOVE_ERRORS();
  },
};
</script>
