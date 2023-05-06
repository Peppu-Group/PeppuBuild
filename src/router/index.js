import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Callback from '../views/Callback.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import Logout from '@/components/Logout.vue'
import Setup from '../views/Setup.vue'
import Template from '../views/Template.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/workspace',
      name: 'homeview',
      component: HomeView
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    },
    {
      path: '/template',
      name: 'template',
      component: Template
    }
    /* 
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    */
  ]
})



export default router
