<template>
  <div class="movie-detail-message">
    <div class="movie-intr-wrapper">
      <div class="movie-intr">
        <h1>{{title}}</h1>
        <p>上映年份：{{year}}</p>
        <p>影片类型: 
          <span class="detail-item-item" v-for="item in genres">{{item}}</span>
        </p>
        <p>原名：{{originalTitle}}</p>
        <p>又名：
          <span class="detail-item-item" v-for="item in aka">{{item}}</span>
        </p>
        <p>制片国家/地区：
          <span class="detail-item-item" v-for="item in countries">{{item}}</span>
        </p>
      </div>
      <div class="movie-rate">
        <h1>{{rate}}</h1>
        <p>{{ratePeople}}人</p>
      </div>    
    </div>
  </div>
</template>
<script>
  export default {
    name: 'movie-detail-message',
    props: {
      title: {
        type: String,
        require: true
      },
      year: {
        type: String,
        require: true
      },
      originalTitle: {
        type: String,
        require: true
      },
      genres: {
        type: Array,
        require: true
      },
      aka: {
        type: Array,
        require: true
      },
      countries: {
        type: Array,
        require: true
      },
      rate: {
        type: [String, Number],
        require: true
      },
      ratePeople: {
        type: [String, Number],
        require: true
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
    padding-right: 90px;
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
</style>
