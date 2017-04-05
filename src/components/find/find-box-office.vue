<template>
  <div class="find-box-office">
    <p>北美票房榜</p>
    <p v-if="movieData.length===0">正在加载中...</p>
    <ul v-else>
      <li v-for="item in movieData">
        {{item.subject.title}}
      </li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'find-box-office',
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
          url: '/api/movie/us_box'
        }).then((response) => {
          this.movieData = response.data.subjects
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
