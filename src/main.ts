import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueApexCharts from 'vue3-apexcharts'

import NavBar from './components/NavBar.vue'
import SecondNav from './components/SecondNav.vue'
import VVCard from './components/VVCard.vue'
import VVTabs from './components/VVTabs.vue'
import EmptyState from './components/EmptyState.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
})


const app = createApp(App)

app.component('apex-chart', VueApexCharts)
app.component('nav-bar', NavBar)
app.component('second-nav', SecondNav)
app.component('vv-card', VVCard)
app.component('vv-tabs', VVTabs)
app.component('empty-state', EmptyState)
app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
