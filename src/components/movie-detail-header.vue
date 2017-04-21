<template>
  <div class="movie-detail-header">
    <div class="header">
      <img class="header-pic" :src="this.img">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'movie-detail-header',
    props: {
      img: {
        type: String,
        required: true
      }
    }
  }
</script>
<style>
  .header {
    background-color: #232323;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .header-pic {
    height: 350px;
  }
</style>
