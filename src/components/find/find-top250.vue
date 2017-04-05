<template>
  <div class="find-top250">
    <p>Top250</p>
    <p v-if="movieData.length===0">正在加载中...</p>
    <ul v-else>
      <li v-for="item in movieData">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'find-top250',
    data: function () {
      return {
        movieData: []
      }
    },
    created: function () {
      this.getMovie()
    },
    methods: {
      getMovie: function () {
        axios({
          method: 'GET',
          url: '/api/movie/top250'
        }).then((response) => {
          this.movieData = response.data.subjects
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
