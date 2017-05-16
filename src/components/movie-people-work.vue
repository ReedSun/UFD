<template>
  <div class="movie-people-work">
    <p class="movie-people-work-title">作品</p>
    <div class="movie-people-work-main">
      <ul class="work-list">
        <li class="work-item" v-for ="item in work" @click="$router.push('/item/' + item.subject.id)">
          <img :src="item.subject.images.small">
          <p class="work-name">{{item.subject.title}}</p>
          <p class="work-label">
            <span v-for="subitem in item.roles">{{subitem}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'movie-people-work',
    props: {
      work: {
        type: Array,
        require: true
      }
    }
  }
</script>
<style scoped>
  .movie-people-work {
    padding: 20px;
    text-align: left;
  }
  .movie-people-work-title {
    font-size: 10px;
    color: #bbb;
    margin-bottom: 10px;
  }
  .movie-people-work-main {
    width: 100%;
    overflow-y: scroll;
  }
  .work-list {
    display: flex;
  }
  .work-item {
    padding: 0 5px;
    width: 90px;
    list-style: none;
    flex-shrink: 0;
    text-align: center;
  }
  .work-item>img {
    height: 100px;
  }
  .work-name {
    font-size: 14px;
    color: #333;
    text-overflow:ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .work-label {
    font-size: 10px;
    color: #999;
  }
  .work-label>span:after {
    content: '/';
    padding-left: 4px;
    padding-right: 4px;
  }
  .work-label>span:last-child:after {
    content: '';
  }
</style>
