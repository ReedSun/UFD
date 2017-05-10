<template>
  <div class="movie-cell">
    <div class="pic">
      <img v-lazy="data.images.medium">
    </div>
    <div class="main">
      <h1>{{data.title}}</h1>
      <div class=""info>
        <p>类型：{{data.genres | movieClass}}</p>
        <p>导演：{{data.directors | moviePeople}}</p>
        <p>主演：{{data.casts | moviePeople}}</p>
        <P v-if="data.year != (new Date()).getFullYear()">上映年份：{{data.year}}</p>
      </div>
      <router-link class="check" :to="'/item/' + data.id">查看详情</router-link>
    </div>
    <div class="rating">{{data.rating.average | dealRate}}</div>
  </div>
</template>
<script>
  import { Lazyload } from 'mint-ui'
  import Vue from 'vue'
  import dealRate from '@/filters/dealrate'
  Vue.use(Lazyload)
  export default {
    name: 'movie-cell',
    props: ['data'],
    filters: {
      moviePeople: function (arr) {
        let result = ''
        for (var item in arr) {
          result += arr[item].name + ' / '
        }
        return result.substring(0, result.length - 2)
      },
      movieClass: function (arr) {
        let result = ''
        for (var item in arr) {
          result += arr[item] + ' / '
        }
        return result.substring(0, result.length - 2)
      },
      dealRate
    },
    methods: {
      goWatchDetail: function (id) {
        this.$router.push('/item/' + id)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .movie-cell {
    height: 147px;
    padding: 10px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    .pic {
      img {
        width: 100px;
      }
    }
    .main {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-grow: 1;
      text-align: left;
      padding: 0 10px;
      height: 100%;
      h1 {
        font-size: 16px;
        text-align: center;
        margin: 0;
      }
      p {
        font-size: 10px;
        color: #666;
        margin: 0;
      }
      .check {
        text-align: center;
        border: 1px solid rgb(252,157,154);
        border-radius: 6px;
        height: 30px;
        line-height: 30px;
        color: rgb(252,157,154);
        text-decoration: none;
      }
      .check:active {
        background: rgb(252,157,154);
        color: #fff;
      }
    }
    .rating {
      color: rgb(254,67,101);
      align-self: center;
      font-size: 26px;
      flex-shrink: 0;
    }
  }
</style>
