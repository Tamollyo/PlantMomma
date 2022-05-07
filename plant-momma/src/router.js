import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PlantDetails from './pages/PlantDetails'
import PlantTasks from './pages/PlantTasks'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/about', component: AboutPage, name: 'AboutPage' },
  { path: '/category/:cid', component: PlantDetails, name: 'PlantDetails' },
  { path: '/plant/:pid', component: PlantTasks, name: 'PlantTasks' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
