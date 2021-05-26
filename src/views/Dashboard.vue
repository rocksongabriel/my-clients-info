<template>
  <div>
    <TopNavBar />

    <!-- This is the main working area of the dashboard -->
    <div class="bg-gray-100">
      <!-- row that has add new button -->
      <div class="flex justify-end py-4 px-7">
        <button
          class="px-4 py-2 text-lg font-extrabold bg-green-500 text-black"
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
import { mapGetters } from "vuex";
import TopNavBar from "../components/dashboard/TopNavBar";
import ClientsInfoCard from "../components/dashboard/ClientsInfoCard";
import AddClientDataForm from "../components/dashboard/AddClientDataForm";

export default {
  name: "Login",
  data() {
    return {
      show_form: false,
    };
  },
  components: {
    TopNavBar,
    ClientsInfoCard,
    AddClientDataForm,
  },
  computed: {
    ...mapGetters(["userData"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    showForm() {
      this.show_form = true;
    },
  },
};
</script>
