import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/second',
      name: 'second',
      component: () => import('../views/SecondView.vue')
    }
  ]
})

export default router
