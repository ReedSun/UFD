<template>
  <div class="future-relesed">
    <p>正在上映</p>
    <ul>
      <li v-for="item in movieData">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'future-relesed',
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
          url: '/api/movie/coming_soon'
        }).then((response) => {
          this.movieData = response.data.subjects
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
