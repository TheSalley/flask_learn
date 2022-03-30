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
    name: 'Playlists',
    component: () => import('@/views/My')
  },
  {
    path: '/playlist/:id',
    name: 'Playlist',
    component: () => import('@/views/Playlist')
  },
  {
    path: '/songs',
    name: 'Songs',
    component: () => import('@/views/Songs')
  },
  {
    path: '/mvs',
    name: 'Mvs',
    component: () => import('@/views/Mvs')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('@/views/Result')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
