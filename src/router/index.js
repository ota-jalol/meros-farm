import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SelectRegion from '@/components/SelectRegion.vue'
import MainPage from '@/views/MainPage.vue'
import Basket from '@/components/Basket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/selectRegion',
      name: 'selectRegion',
      component: SelectRegion
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: MainPage
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
