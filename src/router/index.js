import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../plugins/firebase'

// MAIN ROUTES
import Main from '@/views/main/Main.vue'
import Home from '@/views/main/Home.vue'
import Arts from '@/views/main/Arts.vue'

// ADMIN ROUTES
import Admin from '@/views/admin/Admin'
import Login from '@/views/admin/Login'
import AdminArts from '@/views/admin/Arts'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'MainHome',
          component: Home,
        },
        {
          name: 'MainArts',
          component: Arts,
          path: 'artes/:id',
        },
      ]
    },
    {
      beforeEnter(to, from, next) {
        auth.currentUser 
        ? next({ name: 'Admin' })
        : next({})
      },
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      beforeEnter(to, from, next) {
        auth.currentUser 
        ? next()
        : next({ name: 'Login' })
      },
      name: 'Admin',
      path: '/admin',
      component: Admin,
      redirect: { name: 'AdminArts' },
      children: [
        {
          name: 'AdminArts',
          path: 'arts',
          component: AdminArts
        }
      ]
    }
  ]
})

export default router
