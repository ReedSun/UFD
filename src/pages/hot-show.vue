<!--/*
 * @Author: ReedSun
 * @Date: 2017-04-04 10:18:17
 * @Last Modified by:   ReedSun
 * @Last Modified time: 2017-04-25 22:34:23
 */-->
<template>
  <div class="hot-show">
    <mt-navbar class="page-part" v-model="selected" fixed>
      <mt-tab-item id="1" @click.native="getMoive('/api/movie/in_theaters', 'in_theaters')">正在热映</mt-tab-item>
      <mt-tab-item id="2" @click.native="getMoive('/api/movie/coming_soon', 'coming_soon')">即将上映</mt-tab-item>
    </mt-navbar>
    <mt-tab-container class="main" v-model="selected" swipeable>
      <mt-tab-container-item id="1">
        <movie-cell v-for="item in movieData.in_theaters" :data="item" :key="item.id"></movie-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <movie-cell v-for="item in movieData.coming_soon" :data="item" :key="item.id"></movie-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar fixed value="热映">
      <mt-tab-item id="热映">
        <icon name="ticket" slot="icon"></icon>
        热映
      </mt-tab-item>
      <mt-tab-item id="TOP250" @click.native="movePage('/find')">
        <icon name="eye" slot="icon"></icon>
        TOP250
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="movePage('/my')">
        <icon name="user-o" slot="icon"></icon>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  import axios from 'axios'
  import movieCell from '@/components/movie-cell'
  import 'vue-awesome/icons/ticket'
  import 'vue-awesome/icons/eye'
  import 'vue-awesome/icons/user-o'
  import Icon from 'vue-awesome/components/Icon'
  import { Tabbar, TabItem, Navbar, TabContainer, TabContainerItem, Indicator } from 'mint-ui'
  export default {
    name: 'hotShow',
    data: function () {
      return {
        selected: '1',
        movieData: {
          in_theaters: [],
          coming_soon: []
        }
      }
    },
    components: {
      'movie-cell': movieCell,
      'mtTabItem': TabItem,
      'mtTabbar': Tabbar,
      'mtNavbar': Navbar,
      'mtTabContainer': TabContainer,
      'mtTabContainerItem': TabContainerItem,
      'icon': Icon
    },
    created: function () {
      this.getMoive('/api/movie/in_theaters', 'in_theaters')
    },
    methods: {
      getMoive: function (url, dataLocation) {
        Indicator.close()
        if (this.movieData[dataLocation].length) {
          return
        }
        Indicator.open()
        axios({
          method: 'GET',
          url: url
        }).then((response) => {
          this.movieData[dataLocation] = response.data.subjects
          Indicator.close()
        })
      },
      movePage: function (route) {
        this.$router.push(route)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .hot-show {
    padding-bottom: 55px;
  }
  .main {
    padding-top: 49px;
  }
</style>
