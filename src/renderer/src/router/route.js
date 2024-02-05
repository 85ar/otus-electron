import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './../pages/MainPage.vue'
import CitiesPage from './../pages/CitiesPage.vue'
import AboutPage from './../pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'main'
  },
  {
    path: '/cities',
    component: CitiesPage,
    name: 'cities'
  },
  {
    path: '/about',
    component: AboutPage,
    name: 'about'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
