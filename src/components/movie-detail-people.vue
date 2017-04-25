<!--/*
 * @Author: ReedSun
 * @Date: 2017-04-23 23:59:11
 * @Last Modified by:ReedSun
 * @Last Modified time: 2017-04-25 22:34:23
 */-->
<template>
  <div class="movie-detail-people">
    <p class="movie-detail-people-title">影人</p>
    <div class="movie-detail-people-main">
      <ul class="people-list">
        <li class="people-item" v-for ="item in directors">
          <img :src="item.avatars.small">
          <p class="people-name">{{item.name}}</p>
          <p class="people-label">导演</p>
        </li>
        <li class="people-item" v-for="item in casts">
          <img :src="item.avatars.small">
          <p class="people-name">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'movie-detail-people',
    props: {
      directors: {
        type: Array,
        require: true
      },
      casts: {
        type: Array,
        require: false
      }
    }
  }
</script>
<style scoped>
  .movie-detail-people {
    padding: 20px;
    text-align: left;
  }
  .movie-detail-people-title {
    font-size: 10px;
    color: #bbb;
    margin-bottom: 10px;
  }
  .movie-detail-people-main {
    width: 100%;
    overflow-y: scroll;
  }
  .people-list {
    display: flex;
  }
  .people-item {
    width: 100px;
    list-style: none;
    flex-shrink: 0;
    text-align: center;
  }
  .people-name {
    font-size: 14px;
    color: #333;
  }
  .people-label {
    font-size: 10px;
    color: #999;
  }
</style>
