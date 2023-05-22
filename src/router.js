import { createRouter, createWebHistory } from 'vue-router'
import RegistrationPage from '@/pages/RegistrationPage'
import PhotosPage from '@/pages/GallaryPage'
import PostsPage from '@/pages/PostsPage'
import ToDoPage from '@/pages/ToDoPage'
import MoviesPage from '@/pages/MoviesPage'
import UiKit from '@/pages/UiKit'



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
    path: '/todo',
    component: ToDoPage
  },
  {
    path: '/movies',
    component: MoviesPage
  },
  {
    path: '/uikit',
    component: UiKit
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
