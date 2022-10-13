import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewView from '../views/NewView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new',
    name: 'new',
    component: NewView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
