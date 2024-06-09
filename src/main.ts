import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueApexCharts from 'vue3-apexcharts'

import NavBar from './components/NavBar.vue'

const app = createApp(App)

app.component('apex-chart', VueApexCharts)
app.component('nav-bar', NavBar)
app.use(createPinia())
app.use(router)

app.mount('#app')
