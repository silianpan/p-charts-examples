import { createApp } from "vue";
import App from "./App.vue";
import PCharts from "p-charts";

const app = createApp(App);
app.use(PCharts);
app.mount("#app");
