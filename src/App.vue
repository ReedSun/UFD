<!--/*
 * @Author: ReedSun 
 * @Date: 2017-04-04 10:11:17
 * @Last Modified by:   ReedSun 
 * @Last Modified time: 2017-04-25 22:34:23 
 */-->
<template>
  <div id="app">
  <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      selected: '热映'
    }
  },
  methods: {
    movePage: function (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
