import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import window1 from './views/window1.vue'
import window2 from './views/window2.vue'
import window3 from './views/window3.vue'

const routes = [
    { path: '/window1', component: window1 },
    { path: '/window2', component: window2 },
    { path: '/window3', component: window3 }
]

createApp(App)
    .use(
        createRouter({
            history: createWebHashHistory(),
            routes
        })
    )
    .mount('#app')
