<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'App',
  components: {
    Header, Footer
  },
  mounted () {
    this.$store.dispatch('getCategoryList')
  }
}
</script>
<style lang="less">
</style>
