<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>      
    </keep-alive>
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
