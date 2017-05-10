<template>
  <div class="moive-detail-summary">
    <div class="movie-summary">
      <p class="movie-summary-title">简介</p>
      <p class="movie-summary-main" v-for="item in summary">{{item}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'movie-detail-summary',
    props: {
      summary: {
        type: Array,
        require: true
      }
    }
  }
</script>
<style scoped>
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
    color: #333;
    line-height: 1.35em;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
</style>
