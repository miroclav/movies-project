import { createRouter, createWebHistory } from 'vue-router'
import RegistrationPage from '@/pages/RegistrationPage'
import PhotosPage from '@/pages/GallaryPage'
import PostsPage from '@/pages/PostsPage'
import CalcPage from '@/pages/CalcPage'
import ToDoPage from '@/pages/ToDoPage'



const routes = [
  {
    path: '/',
    component: RegistrationPage
  },
  {
    path: '/photos',
    component: PhotosPage
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/calc',
    component: CalcPage
  },
  {
    path: '/todo',
    component: ToDoPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
