import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: '/discovery',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '',   
        component: () => import('@/views/Discovery'),
      },
      {
        path: 'toplist',
        component: ()=> import('@/views/Rank')
      },
      {
        path: 'playlist',
        component: ()=> import('@/views/PlayList')
      },
      {
        path: 'djradio',
        component: ()=> import('@/views/Radio')
      },
      {
        path: 'artist',
        component: ()=> import('@/views/Artist')
      },
      {
        path: 'album',
        component: ()=> import('@/views/Album')
      },
      
    ]
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
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Download')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
