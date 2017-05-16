<template>
  <div class="movie-detail-people">
    <p class="movie-detail-people-title">影人</p>
    <div class="movie-detail-people-main">
      <ul class="people-list">
        <li class="people-item" v-for ="item in directors" @click="goPeoplePage(item.id)">
          <img :src="item.avatars?item.avatars.small:'http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png'">
          <p class="people-name">{{item.name}}</p>
          <p class="people-label">导演</p>
        </li>
        <li class="people-item" v-for="item in casts" @click="goPeoplePage(item.id)">
          <img :src="item.avatars?item.avatars.small:'http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png'">
          <p class="people-name">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { MessageBox } from 'mint-ui'
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
    },
    methods: {
      goPeoplePage (id) {
        if (id) {
          this.$router.push('/people/' + id)
        } else {
          MessageBox('提示', '暂无此影人信息')
        }
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
  .people-item>img {
    height: 100px;
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
