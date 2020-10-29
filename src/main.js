import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Docs from './components/Docs.vue'
import Sponsor from './components/Sponsor.vue'




const router = createRouter({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/docs',
            name: 'Docs',
            component: Docs
        },
        {
            path: '/sponsor',
            name: 'Sponsor',
            component: Sponsor
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')