<template>
  <div id="App">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuild.vue'

export default {
  name: 'App',

  components: {FooterGuide},

  mounted () {
    this.$store.dispatch('getAddress')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
    color: red
</style>
