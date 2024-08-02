import { createApp } from 'vue'
import './assets/main.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue'
import router from "./router/index.js";
import store from "./store/index.js";

const app = createApp(App)
app.use(Toast)
app.use(router)
app.use(store)
app.mount('#app')
