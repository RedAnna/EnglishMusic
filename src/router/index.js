import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Commentary',
    component: () => import('../views/commentary/commentary.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine/mine.vue')
  },
  {
    path: '/commentary',
    name: 'Commentary',
    component: () => import('../views/commentary/commentary.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/category.vue')
  },
  {
    path: '/mv',
    name: 'Mv',
    component: () => import('../views/mv/mv.vue')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../views/ranking/ranking.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/search.vue')
  },
  {
    path: '/playPage',
    name: 'playPage',
    component: () => import('../components/common/play/playPage.vue'),
    children: [
      {
        path:'',
        component: () => import('../components/common/play/playPage/playIntroduct.vue')
      },
      {
        path:'/playPage/playIntroduct',
        component: () => import('../components/common/play/playPage/playIntroduct.vue')
      },
      {
        path:'/playPage/playCenter',
        component: () => import('../components/common/play/playPage/playCenter.vue')
      },
      {
        path:'/playPage/playRight',
        component: () => import('../components/common/play/playPage/playRight.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
