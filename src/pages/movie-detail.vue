<template>
  <div class="moive-detail">
    <mt-header class="header" title="电影" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
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
  import { Header, Button } from 'mint-ui'
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
        data: {}
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
        axios({
          methods: 'GET',
          url: '/api/movie/subject/' + this.$route.params.id
        }).then((response) => {
          this.data = response.data
        })
      }
    }
  }
</script>
<style>
  .header {
    background-color: #232323 !important;
  }
</style>
