import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './apis/servers'
import './assets/main.css'
// import BootstrapVue from 'boots//÷trap-vue'
import VoerroTagsInput from '@voerro/vue-tagsinput'

import '../node_modules/@voerro/vue-tagsinput/dist/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
// app.use(BootstrapVue)
app.component('tags-input', VoerroTagsInput)

app.config.productionTip = false
app.use(createPinia())
app.use(router)

app.mount('#app')
