import './assets/main.css'
import 'vue-final-modal/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVfm } from 'vue-final-modal'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVfm());
app.mount('#app')
