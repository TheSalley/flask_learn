import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/discovery',
  },
  {
    path: '/discovery',
    name: 'Discovery',
    component: () => import('@/views/Discovery')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/My')
  },
  {
    path: '/friend',
    name: 'Friend',
    component: () => import('@/views/Friend')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/Store')
  },
  {
    path: '/musician',
    name: 'Musician',
    component: () => import('@/views/Musician')
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('@/views/Download')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
