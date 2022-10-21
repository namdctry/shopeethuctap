import { createApp } from "vue";
import "./css/base_reg.css";
import "./css/base.css";
import "./css/respon.css";
import App from "./App.vue";
import router from "./routes";
import { store } from "./store";

createApp(App).use(router).use(store).mount("#app");
