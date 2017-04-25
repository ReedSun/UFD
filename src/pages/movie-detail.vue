<!--/*
 * @Author: ReedSun
 * @Date: 2017-04-20 20:49:11
 * @Last Modified by:ReedSun
 * @Last Modified time: 2017-04-25 22:34:23
 */-->
<template>
  <div class="moive-detail">
    <mt-header class="header" title="电影" fixed>
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    <movie-detail-header :img="data.images.large"></movie-detail-header>
    <movie-detail-message :title="data.title" :year="data.year" :originalTitle="data.original_title" :genres="data.genres" :aka="data.aka" :countries="data.countries" :rate="data.rating.average" :ratePeople="data.ratings_count"></movie-detail-message>
    <movie-detail-summary :summary="movieSummaryArr"></movie-detail-summary>
    <movie-detail-people :directors="data.directors" :casts="data.casts"></movie-detail-people>
  </div>
</template>
<script>
  import axios from 'axios'
  import movieDetailHeader from '@/components/movie-detail-header'
  import movieDetailMessage from '@/components/movie-detail-message'
  import movieDetailSummary from '@/components/movie-detail-summary'
  import movieDetailPeople from '@/components/movie-detail-people'
  import { Header, Button, Indicator } from 'mint-ui'
  export default {
    name: 'movie-detail',
    components: {
      movieDetailHeader,
      movieDetailMessage,
      movieDetailSummary,
      movieDetailPeople,
      mtHeader: Header,
      mtButton: Button
    },
    data: function () {
      return {
        data: {
          images: {
            large: 'http://i2.muimg.com/567571/dfc81d4142229b4a.png'
          },
          rating: {
            average: ''
          },
          summary: ''
        }
      }
    },
    computed: {
      movieSummaryArr: function () {
        return this.data.summary.split(/\n/)
      }
    },
    created: function () {
      this.getData()
    },
    methods: {
      getData: function () {
        Indicator.open()
        axios({
          methods: 'GET',
          url: '/api/movie/subject/' + this.$route.params.id
        }).then((response) => {
          this.data = response.data
          Indicator.close()
        })
      },
      back: function () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
  .header {
    background-color: #232323 !important;
  }
</style>
