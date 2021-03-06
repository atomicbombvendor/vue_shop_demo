/*
路由器对象
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

const MSite = () => import('../pages/MSite/MSite.vue')

Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [{
    path: '/msite',
    component: MSite,
    meta:{
      showFooter: true
    }
  },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '',
      redirect: '/msite'
    },
    {
      path: "/shop",
      component: Shop,
      children: [
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
  ]
})
