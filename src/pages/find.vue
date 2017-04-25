<!--/*
 * @Author: ReedSun
 * @Date: 2017-04-04 10:18:17
 * @Last Modified by: ReedSun
 * @Last Modified time: 2017-04-25 22:34:23
 */-->
<template>
  <div class="find">
    <mt-navbar class="page-part" v-model="selected" fixed>
      <mt-tab-item id="first">1-50</mt-tab-item>
      <mt-tab-item id="second">51-100</mt-tab-item>
      <mt-tab-item id="third">101-150</mt-tab-item>
      <mt-tab-item id="fourth">151-200</mt-tab-item>
      <mt-tab-item id="fifth">201-250</mt-tab-item>
    </mt-navbar>
    <mt-tab-container class="main" v-model="selected" swipeable>
      <mt-tab-container-item id="first">
        <movie-cell v-for="item in movieData.first.data" :data="item" :key="item.id"></movie-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="second">
        <movie-cell v-for="item in movieData.second.data" :data="item" :key="item.id"></movie-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="third">
        <movie-cell v-for="item in movieData.third.data" :data="item" :key="item.id"></movie-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="fourth">
        <movie-cell v-for="item in movieData.fourth.data" :data="item" :key="item.id"></movie-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="fifth">
        <movie-cell v-for="item in movieData.fifth.data" :data="item" :key="item.id"></movie-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar fixed value="TOP250">
      <mt-tab-item id="热映" @click.native="movePage('/')">
        <icon name="ticket" slot="icon"></icon>
        热映
      </mt-tab-item>
      <mt-tab-item id="TOP250">
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
  import movieCell from '@/components/movie-cell'
  import axios from 'axios'
  import 'vue-awesome/icons/ticket'
  import 'vue-awesome/icons/eye'
  import 'vue-awesome/icons/user-o'
  import Icon from 'vue-awesome/components/Icon'
  import { Tabbar, TabItem, Navbar, TabContainer, TabContainerItem, Indicator } from 'mint-ui'
  export default {
    name: 'find',
    data: function () {
      return {
        selected: 'first',
        movieData: {
          first: {
            id: 0,
            data: [],
            load: false
          },
          second: {
            id: 1,
            data: [],
            load: false
          },
          third: {
            id: 2,
            data: [],
            load: false
          },
          fourth: {
            id: 3,
            data: [],
            load: false
          },
          fifth: {
            id: 4,
            data: [],
            load: false
          }
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
    watch: {
      selected: function (val, oldval) {
        if (!this.movieData[val].load) {
          this.getMoive((this.movieData[val].id * 50), val)
        } else {
          Indicator.close()
        }
      }
    },
    created: function () {
      this.getMoive(0, 'first')
    },
    methods: {
      getMoive: function (start, dataLocation) {
        Indicator.open()
        axios({
          method: 'GET',
          url: '/api/movie/top250',
          params: {
            start: start,
            count: 50
          }
        }).then((response) => {
          this.movieData[dataLocation].data = response.data.subjects
          this.movieData[dataLocation].load = true
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
  .find {
    padding-bottom: 55px;
  }
  .main {
    padding-top: 49px;
  }
</style>
