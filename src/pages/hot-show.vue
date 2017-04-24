<template>
  <div class="hot-show">
    <mt-navbar class="page-part" v-model="selected" fixed>
      <mt-tab-item id="1">正在热映</mt-tab-item>
      <mt-tab-item id="2">即将上映</mt-tab-item>
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
  import axios from 'axios'
  import movieCell from '@/components/movie-cell'
  import { Tabbar, TabItem, Navbar, TabContainer, TabContainerItem } from 'mint-ui'
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
      'mtTabContainerItem': TabContainerItem
    },
    created: function () {
      this.getMoive('/api/movie/in_theaters', 'in_theaters')
    },
    mounted: function () {
      this.getMoive('/api/movie/coming_soon', 'coming_soon')
    },
    methods: {
      getMoive: function (url, dataLocation) {
        axios({
          method: 'GET',
          url: url
        }).then((response) => {
          this.movieData[dataLocation] = response.data.subjects
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
