import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/main.css";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { auth } from "../firebase";

library.add(faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// let app;

// auth.onAuthStateChange(() => {
//   if (!app) {
//     app = new Vue({
//       router,
//       store,
//       render: (h) => h(App),
//     }).$mount("#app");
//   }
// });
