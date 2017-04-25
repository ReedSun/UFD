<!--/*
 * @Author: ReedSun
 * @Date: 2017-04-04 10:18:17
 * @Last Modified by: ReedSun
 * @Last Modified time: 2017-04-25 22:34:23
 */-->
<template>
  <div class="my">
    <p>这里是my页面</p>
    <mt-tabbar fixed value="我的">
      <mt-tab-item id="热映" @click.native="movePage('/')">
        <icon name="ticket" slot="icon"></icon>
        热映
      </mt-tab-item>
      <mt-tab-item id="TOP250" @click.native="movePage('/find')">
        <icon name="eye" slot="icon"></icon>
        TOP250
      </mt-tab-item>
      <mt-tab-item id="我的">
        <icon name="user-o" slot="icon"></icon>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  import 'vue-awesome/icons/ticket'
  import 'vue-awesome/icons/eye'
  import 'vue-awesome/icons/user-o'
  import Icon from 'vue-awesome/components/Icon'
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
      'mtTabbar': Tabbar,
      'icon': Icon
    },
    methods: {
      movePage: function (route) {
        this.$router.push(route)
      }
    }
  }
</script>
