<template>
  <div id="app">
    <button @click="movePage('/')">热映</button>
    <button @click="movePage('/find')">发现</button>
    <button @click="movePage('/my')">我的</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    movePage: function (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
