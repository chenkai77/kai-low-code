import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@src/styles/reset.scss";
import "element-plus/es/components/message/style/css";
import importVant from "@src/utils/importVant";

const app = createApp(App);

// 按需引入vant
importVant(app);

app.use(createPinia());
app.use(router).mount("#app");
