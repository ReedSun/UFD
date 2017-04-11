<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>      
    </keep-alive>
    <mt-tabbar fixed  v-model="selected">
      <mt-tab-item id="热映" @click.native="movePage('/')">
        <img slot="icon" src="">
        热映
      </mt-tab-item>
      <mt-tab-item id="TOP250" @click.native="movePage('/find')">
        <img slot="icon" src="">
        TOP250
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="movePage('/my')">
        <img slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
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
