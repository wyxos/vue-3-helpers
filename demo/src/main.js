import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'

const app = createApp(App)

app.use(Oruga, { ...bulmaConfig, iconPack: 'fas' })

app.mount('#app')
