// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { setupRouter} from './router'
import '@/styles/global.scss';

const app = createApp(App)
console.log(import.meta.env, 'iii')
app.use(createPinia())
setupRouter(app);
app.mount('#app')
