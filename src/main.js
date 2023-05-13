import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueFire } from 'vuefire'
// the file we created above with `database`, `firestore` and other exports
import { firebaseApp } from './firebaseInit'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

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
app.use(Toast)
app
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
    ],
  })

app.mount('#app')
