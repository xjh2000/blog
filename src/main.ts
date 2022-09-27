import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import store from "./store";

let app = createApp(App);


// function register
app.use(router);
app.use(store);


app.mount('#app')
