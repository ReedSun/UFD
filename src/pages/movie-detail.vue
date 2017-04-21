<template>
  <div class="moive-detail">
    <movie-detail-header :img="data.images.large"></movie-detail-header>
    <div class="movie-intr-wrapper">
      <div class="movie-intr">
        <h1>{{data.title}}</h1>
        <p>上映年份：{{data.year}}</p>
        <p>影片类型: 
          <span class="detail-item-item" v-for="item in data.genres">{{item}}</span>
        </p>
        <p>原名：{{data.original_title}}</p>
        <p>又名：
          <span class="detail-item-item" v-for="item in data.aka">{{item}}</span>
        </p>
        <p>制片国家/地区：
          <span class="detail-item-item" v-for="item in data.countries">{{item}}</span>
        </p>
      </div>
      <div class="movie-rate">
        <h1>{{data.rating.average}}</h1>
        <p>{{data.ratings_count}}人</p>
      </div>    
    </div>
    <div class="movie-summary">
      <p class="movie-summary-title">简介</p>
      <p class="movie-summary-main" v-for="item in movieSummaryArr">{{item}}</p>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import movieDetailHeader from '@/components/movie-detail-header'
  export default {
    name: 'movie-detail',
    components: {
      movieDetailHeader
    },
    data: function () {
      return {
        data: {}
      }
    },
    computed: {
      movieSummaryArr: function () {
        return this.data.summary.split(/\n/)
      }
    },
    created: function () {
      this.getData()
    },
    methods: {
      getData: function () {
        axios({
          methods: 'GET',
          url: '/api/movie/subject/' + this.$route.params.id
        }).then((response) => {
          this.data = response.data
        })
      }
    }
  }
</script>
<style>
  .movie-intr-wrapper {
    position: relative;
    padding: 20px;
    border-bottom: 1px solid #eee;
  }
  .movie-intr {
    text-align: left;
  }
  .movie-intr>h1 {
    font-size: 30px;
    margin-bottom: 5px;
  }
  .movie-intr>p {
    color: #969696;
    font-size: 12px;
    line-height: 1.5em;
  }
  .detail-item-item:after {
    content: '/';
    padding-left: 4px;
    padding-right: 4px;
  }
  .detail-item-item:last-child:after {
    content: '';
  }
  .movie-rate {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    box-shadow: 4px 4px 10px 4px #ccc;
  }
  .movie-rate>h1 {
    font-size: 30px;
    color: #232323;
  }
  .movie-rate>p {
    color: #969696;
    font-size: 12px;
    line-height: 1.5em;    
  }
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
    color: #232323;
    line-height: 1.3em;
    margin-bottom: 10px;
  }
</style>
