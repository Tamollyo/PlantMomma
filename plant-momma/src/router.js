import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PlantDetails from './pages/PlantDetails'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/about', component: AboutPage, name: 'AboutPage' },
  { path: '/category/:cid', component: PlantDetails, name: 'PlantDetails' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
