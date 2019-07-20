<template>
  <div id="App">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuild.vue'

export default {
  name: 'App',
  components: {FooterGuide}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
    color: red
</style>
