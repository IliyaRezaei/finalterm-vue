import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BaseLogo from '@/components/BaseLogo.vue'
import BaseButton from '@/components/BaseButton.vue'
import SearchButton from './components/SearchButton.vue'
import BaseInput from './components/BaseInput.vue'

const app = createApp(App)

app.component('BaseLogo', BaseLogo)
app.component('BaseButton', BaseButton)
app.component('SearchButton', SearchButton)
app.component('BaseInput', BaseInput)

app.use(createPinia())
app.use(router)

app.mount('#app')
