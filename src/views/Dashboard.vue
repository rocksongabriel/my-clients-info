<template>
  <div>
    <TopNavBar />

    <!-- This is the main working area of the dashboard -->
    <div>
      <!-- row that has add new button -->
      <div class="flex justify-end py-4 px-7">
        <button
          class="px-4 py-2 text-lg font-extrabold bg-green-500 text-black"
        >
          Add New
        </button>
      </div>

      <!-- this div will have the new form to add a new client data -->
      <div></div>

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

export default {
  name: "Login",
  data() {
    return {
     
    };
  },
  components: {
    TopNavBar,
    ClientsInfoCard,
  },
  computed: {
    ...mapGetters(["userData"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
