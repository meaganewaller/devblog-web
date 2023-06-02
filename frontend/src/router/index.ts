import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        // default: () => import('@/views/HomeViewWave.vue'),
        //rightSide: SidebarRight,
        //navigation: TheNavigation,
      }
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   components: {
    //     default: () => import('@/views/Login.vue'),
    //     //rightSide: SidebarRight,
    //     //navigation: TheNavigation,
    //   }
    // },
    {
      path: '/posts',
      name: 'posts',
      components: {
        default: () => import('../views/Posts.vue'),
        // rightSide: SidebarRight,
        // navigation: TheNavigationBlue,
      }
    },
    // {
    //   path: '/archived',
    //   name: 'archived',
    //   components: {
    //     default: () => import('../views/Archived.vue'),
    //     rightSide: SidebarRight,
    //     navigation: TheNavigationBlue,
    //   }
    // },
    // {
    //   path: '/posts/:id',
    //   name: 'postDetail',
    //   components: {
    //     default:() => import('../views/PostDetail.vue'),
    //     // rightSide: SidebarRight,
    //     // navigation: TheNavigation,
    //   },
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      components: {
        default: () => import('@/views/NotFound.vue'),
        //rightSide: SidebarRight,
        //navigation: TheNavigation,
      },
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      if (to.hash.startsWith('#img-')) {
        return {}
      }
      return {
        el: to.hash,
        top: 70,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
