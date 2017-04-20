<template>
  <div class="moive-detail">
    <p>这里是电影详情</p>
    <p>{{$route.params.id}}</p>
  </div>
</template>
<script>
  export default {
    name: 'movie-detail'
  }
</script>
