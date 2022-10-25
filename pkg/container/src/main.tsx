import { createApp } from 'vue'
import { App } from './App'
import { router } from './routes/router'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './global.scss'
import 'virtual:svgsprites'

const app = createApp(App)
app.use(router)
app.mount('#container')
