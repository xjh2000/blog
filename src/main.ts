import {createApp} from 'vue'
import './style.css'
import App from './App.vue';
import {routerConfig} from "./config/routerConfig";
import piniaConfig from "./config/piniaConfig";


let app = createApp(App);

app.use(routerConfig);
app.use(piniaConfig);

app.mount('#app')
