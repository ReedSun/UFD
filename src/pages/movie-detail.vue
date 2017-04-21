<template>
  <div class="moive-detail">
    <movie-detail-header :img="data.images.large"></movie-detail-header>
    <movie-detail-message :title="data.title" :year="data.year" :originalTitle="data.original_title" :genres="data.genres" :aka="data.aka" :countries="data.countries" :rate="data.rating.average" :ratePeople="data.ratings_count"></movie-detail-message>
    <movie-detail-summary :summary="movieSummaryArr"></movie-detail-summary>
  </div>
</template>
<script>
  import axios from 'axios'
  import movieDetailHeader from '@/components/movie-detail-header'
  import movieDetailMessage from '@/components/movie-detail-message'
  import movieDetailSummary from '@/components/movie-detail-summary'
  export default {
    name: 'movie-detail',
    components: {
      movieDetailHeader,
      movieDetailMessage,
      movieDetailSummary
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
