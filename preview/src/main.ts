import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import importVant from "@/utils/importVant";
import "./styles/reset.scss";

const app = createApp(App);

importVant(app);

app.use(router).mount("#app");
