import { PrimeVue } from '@primevue/core'
import Aura from '@primevue/themes/aura'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const pinia = createPinia()

createApp(App)
	.use(pinia)
	.use(PrimeVue, {
		theme: { preset: Aura, options: { darkModeSelector: '.theme-dark' } },
	})
	.mount('#app')
