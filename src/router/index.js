import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/TablePage.vue'),
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/CardsPage.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfilePage.vue'),
    },
    {
      path: '/car/:id',
      name: 'car',
      component: () => import('../views/CarIdPage.vue'),
    },
    // {
    //   path: '/reviews',
    //   name: 'ReviewPage',
    //   component: () => import('../views/ReviewPage.vue'),
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundPage.vue'),
    },
  ]
})

export default router


//****VUE ROOTER */
// import { createRouter, createWebHistory } from 'vue-router' 
// const router = createRouter({
//   history: createWebHistory(),
//   routes: [{
//     name: 'Home',
//     path: '/',
//     component: () => import ('@/views/HomeView.vue'),
//   }]
// })