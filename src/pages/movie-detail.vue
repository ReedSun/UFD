<template>
  <div class="moive-detail">
    <movie-detail-header :img="data.images.large"></movie-detail-header>
    <movie-detail-message :title="data.title" :year="data.year" :originalTitle="data.original_title" :genres="data.genres" :aka="data.aka" :countries="data.countries" :rate="data.rating.average" :ratePeople="data.ratings_count"></movie-detail-message>
    <div class="movie-summary">
      <p class="movie-summary-title">简介</p>
      <p class="movie-summary-main" v-for="item in movieSummaryArr">{{item}}</p>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import movieDetailHeader from '@/components/movie-detail-header'
  import movieDetailMessage from '@/components/movie-detail-message'
  export default {
    name: 'movie-detail',
    components: {
      movieDetailHeader,
      movieDetailMessage
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
  .movie-summary {
    padding: 20px;
    text-align: left;
  }
  .movie-summary-title {
    font-size: 10px;
    color: #bbb;
    margin-bottom: 10px;
  }
  .movie-summary-main {
    font-size: 14px;
    color: #232323;
    line-height: 1.3em;
    margin-bottom: 10px;
  }
</style>
