// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 应用路由器;根据路由器配置的路由跳转到不同的页面
  router,
  // render: h => h(App)
  components: {App},
  template: '<App/>'
})
