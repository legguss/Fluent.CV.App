import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import './resume.sass'
import App from './App.vue'
import Resume from './components/Resume.vue'

const routes = [
   { path: '/:id', component: Resume },
]

const router = VueRouter.createRouter({
   history: VueRouter.createWebHistory(),
   routes, 
})

const app = createApp(App)

app.use(router);
app.mount('#app')
