<template>
  <div class="being-relesed">
    <p>正在上映</p>
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
    name: 'being-relesed',
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
          url: '/api/movie/in_theaters'
        }).then((response) => {
          this.movieData = response.data.subjects
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
