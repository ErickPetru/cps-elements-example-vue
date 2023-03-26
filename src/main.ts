import { createApp } from 'vue'
import App from './App.vue'

import "@cps-elements/web/themes/light.css";
import { setBasePath } from "@cps-elements/web";

setBasePath("https://cdn.jsdelivr.net/npm/@cps-elements/web");

createApp(App).mount('#app')
