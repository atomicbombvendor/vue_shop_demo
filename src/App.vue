<template>
  <div id="App">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>


<script>
import FooterGuide from './components/FooterGuide/FooterGuild.vue'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {FooterGuide},
  mounted () {
    // this.$store.dispatch('getAddress')
    // 调用方法加载store中的值
    this.getAddress()
    // 发送请求可以在父组件中发，也可以在需要用到的子组件中发。
    this.getShops()

    this.getUserInfo()

    this.getShopInfo()
  },
  methods:{
    //在methods中声明方法
    ...mapActions(['getAddress', 'getShops', 'getUserInfo',
    'getShopInfo']),
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
    color: red
</style>
