/*
路由器对象
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [{
    path: '/msite',
    component: MSite
  },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '',
      redirect: '/msite'
    }
  ]
})
