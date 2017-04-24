<template>
  <div class="my">
    <p>这里是my页面</p>
    <mt-tabbar fixed value="我的">
      <mt-tab-item id="热映" @click.native="movePage('/')">
        <img slot="icon" src="">
        热映
      </mt-tab-item>
      <mt-tab-item id="TOP250" @click.native="movePage('/find')">
        <img slot="icon" src="">
        TOP250
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  import { Tabbar, TabItem } from 'mint-ui'
  export default {
    name: 'my',
    data: function () {
      return {
        selectedForBottomBar: '我的'
      }
    },
    components: {
      'mtTabItem': TabItem,
      'mtTabbar': Tabbar
    },
    methods: {
      movePage: function (route) {
        this.$router.push(route)
      }
    }
  }
</script>
