import '@/assets/styles/index.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'

import App from './App.vue'
import router from './router'

// @ts-ignore
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Lottie, { name: 'Lottie' })

router
  .isReady()
  .then(() => {
    app.mount('#app')
  })
