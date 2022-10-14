import {createApp} from 'vue'
import './style.css'
import App from './App.vue';
import {routerConfig} from "./config/routerConfig";
import piniaConfig from "./config/piniaConfig";
import {ConfigProvider} from "vant";

// open dark mode
import 'element-plus/theme-chalk/dark/css-vars.css';
import "./config/markdwonConfig";

let app = createApp(App);

app.use(routerConfig);
app.use(piniaConfig);
app.use(ConfigProvider);


app.mount('#app')
