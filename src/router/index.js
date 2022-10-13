import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewView from '../views/NewView.vue'
import EditView from '../views/EditView.vue'

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
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
