<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <route-component></route-component>
    <router-view></router-view>
  </div>
</template>

<script>
import RouteComponent from './components/Router.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    RouteComponent
  }
}
</script>

<style lang='scss'>
  html,body{width:100%;height:100%;}
  #app{width:1200px;margin:0 auto;}
</style>
