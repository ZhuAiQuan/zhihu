import Main from '@/components/main/main.vue'
import Home from '@/view/home/home.vue'

export default [
  {
    path: '/',
    name: 'home',
    meta: {
      title: ''
    },
    component: Main,
    children: [
      {
        path: 'home',
        name: '首页',
        meta: {
          title: ''
        },
        component: Home,
        children: [
          {
            path: '/recommend',
            name: '推荐',
            meta: {
              title: ''
            },
            component: () => import('@/view/home/components/recommend.vue')
          },
          {
            path: '/follow',
            name: '关注',
            meta: {
              title: ''
            },
            component: () => import('@/view/home/components/follow.vue')
          },
          {
            path: '/hotlist',
            name: '热榜',
            meta: {
              title: ''
            },
            component: () => import('@/view/home/components/hot_list.vue')
          }
        ]
      },
      {
        path: '/find',
        name: '发现',
        meta: {
          title: ''
        },
        component: () => import('@/view/find/find.vue')
      },
      {
        path: '/wait',
        name: '等你来答',
        meta: {
          title: ''
        },
        component: () => import('@/view/wait/wait.vue')
      }
    ]
  }
]