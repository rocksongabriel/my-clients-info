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
      <div class="flex justify-around py-4">
        <!-- form to add new client data -->
        <!-- make the form responsive below 360px -->
        <form class="bg-gray-200 space-y-2 md:w-3/4 lg:w-2/4 p-4">
          <h1 class="text-center text-2xl md:text-2xl py-2 font-bold">
            Add new client data
          </h1>
          <div class="w-full flex items-center justify-between">
            <label class="font-medium font-serif text-lg text-gray-900" for=""
              >Company Name</label
            >
            <input
              class="
                p-2
                md:w-2/3
                text-lg
                w-3/5
                border border-gray-600
                outline-none
              "
              type="text"
            />
          </div>

          <div class="w-full flex items-center justify-between">
            <label class="font-medium font-serif text-lg text-gray-900" for=""
              >Addres of Company</label
            >
            <input
              class="
                p-2
                md:w-2/3
                text-lg
                w-3/5
                border border-gray-600
                outline-none
              "
              type="text"
            />
          </div>

          <div class="w-full flex items-center justify-between">
            <label class="font-medium font-serif text-lg text-gray-900" for=""
              >Owner Name</label
            >
            <input
              class="
                p-2
                md:w-2/3
                text-lg
                w-3/5
                border border-gray-600
                outline-none
              "
              type="text"
            />
          </div>

          <div class="w-full flex items-center justify-between">
            <label class="font-medium font-serif text-lg text-gray-900" for=""
              >Contact Name</label
            >
            <input
              class="
                p-2
                md:w-2/3
                text-lg
                w-3/5
                border border-gray-600
                outline-none
              "
              type="text"
            />
          </div>

          <div class="w-full flex items-center justify-between">
            <label class="font-medium font-serif text-lg text-gray-900" for=""
              >Contact Email</label
            >
            <input
              class="
                p-2
                md:w-2/3
                text-lg
                w-3/5
                border border-gray-600
                outline-none
              "
              type="text"
            />
          </div>

          <div class="w-full flex items-center justify-between">
            <label class="font-medium font-serif text-lg text-gray-900" for=""
              >Contact Phone</label
            >
            <input
              class="
                p-2
                md:w-2/3
                text-lg
                w-3/5
                border border-gray-600
                outline-none
              "
              type="text"
            />
          </div>

          <div class="w-full flex items-center justify-between">
            <label class="font-medium font-serif text-lg text-gray-900" for=""
              >Contact Website</label
            >
            <input
              class="
                p-2
                md:w-2/3
                text-lg
                w-3/5
                border border-gray-600
                outline-none
              "
              type="text"
            />
          </div>

          <div class="w-full flex items-center justify-between">
            <label class="font-medium font-serif text-lg text-gray-900" for=""
              >Source of Info</label
            >
            <input
              class="
                p-2
                md:w-2/3
                text-lg
                w-3/5
                border border-gray-600
                outline-none
              "
              type="text"
            />
          </div>

          <div class="w-full flex items-center justify-between">
            <label class="font-medium font-serif text-lg text-gray-900" for=""
              >Link to Source</label
            >
            <input
              class="
                p-2
                md:w-2/3
                text-lg
                w-3/5
                border border-gray-600
                outline-none
              "
              type="text"
            />
          </div>

          <div class="w-full flex items-center justify-between">
            <label class="font-medium font-serif text-lg text-gray-900" for=""
              >Problem of Company</label
            >
            <textarea
              class="w-3/5 md:w-2/3 border outline-none p-2 border-gray-600"
              name=""
              id=""
              cols="30"
              rows="7"
            ></textarea>
          </div>

          <div class="flex justify-around">
            <button class="px-4 py-2 text-xl bg-red-600 text-white my-2">
              Add Client Data
            </button>
          </div>
        </form>
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

export default {
  name: "Login",
  data() {
    return {};
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
