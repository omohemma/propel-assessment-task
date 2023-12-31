import { createApp } from "vue";

import router from "./router";
import PrimeVue from "primevue/config";
import App from "./App.vue";


import "../css/theme.css";
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(PrimeVue).use(router).mount("#app");
