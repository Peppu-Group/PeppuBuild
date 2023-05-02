import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'

const app = createApp(App)

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                path: '/auth'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

app.use(router)
app.use(store)

app.mount('#app')
