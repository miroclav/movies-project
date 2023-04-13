import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import compotents from '@/components/UI'
import router from '@/router'
import { createPinia } from 'pinia'



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

compotents.forEach(component => {
  app.component(component.name, component)
})

app.use(router)
  .use(createPinia())
  .use(vuetify)
  .mount('#app')
