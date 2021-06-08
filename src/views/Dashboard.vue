<template>
  <div>
    <TopNavBar />

    <!-- Alert for message -->
    <div class="flex justify-around" v-if="show_alert">
      <div
        class="bg-blue-500 p-4 m-5 w-11/12 flex justify-between align-middle"
      >
        <p class="text-base md:text-lg font-bold text-white text-center flex-1">
          {{ userMessage }}
        </p>
        <font-awesome-icon
          :icon="['fas', 'times']"
          class="text-red-300 text-xl cursor-pointer hover:text-red-400"
          @click="show_alert = !show_alert"
        ></font-awesome-icon>
      </div>
    </div>

    <!-- This is the main working area of the dashboard -->
    <div class="">
      <!-- row that has add new button -->
      <div class="flex justify-between py-4 px-7">
        <button
          class="
            px-4
            py-2
            text-lg
            font-extrabold
            bg-red-500
            text-black
            focus:outline-none
            hover:bg-red-700
            hover:text-white
            hover:shadow-xl
          "
          @click="logout()"
        >
          Logout
        </button>
        <button
          class="
            px-4
            py-2
            text-lg
            font-extrabold
            bg-green-500
            text-black
            focus:outline-none
            hover:bg-green-700
            hover:text-white
            hover:shadow-xl
          "
          @click="show_form = !show_form"
        >
          Add New
        </button>
      </div>

      <!-- this div will have the new form to add a new client data -->
      <div class="flex justify-around py-4" v-show="show_form">
        <AddClientDataForm />
      </div>

      <!-- all clients data -->
      <div class="px-6 py-4">
        <!-- individual client info -->
        <ClientsInfoCard />
      </div>
    </div>
  </div>
</template>
d
<script>
import { mapGetters, mapMutations } from "vuex";
import TopNavBar from "../components/dashboard/TopNavBar";
import ClientsInfoCard from "../components/dashboard/ClientsInfoCard";
import AddClientDataForm from "../components/dashboard/AddClientDataForm";

export default {
  name: "Login",
  data() {
    return {
      show_form: false,
      show_alert: true,
    };
  },
  components: {
    TopNavBar,
    ClientsInfoCard,
    AddClientDataForm,
  },
  computed: {
    ...mapGetters(["userData", "userMessage"]),
  },
  methods: {
    ...mapMutations(["REMOVE_MESSAGES"]),

    logout() {
      this.$store.dispatch("logout");
    },
    showForm() {
      this.show_form = true;
    },
  },

  mounted() {
    if (this.userMessage) {
      this.show_alert = true;
    }
    // remove the message after 5 seconds
    setTimeout(() => {
      this.REMOVE_MESSAGES();
      this.show_alert = false;
    }, 5000);
  },
};
</script>
