<template>
  <div class="hot-show">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">正在热映</mt-tab-item>
      <mt-tab-item id="2">即将上映</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="item in movieData.in_theaters" :title="item.title"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="item in movieData.coming_soon" :title="item.title"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'hotShow',
    data: function () {
      return {
        show: 'now',
        selected: '1',
        movieData: {
          in_theaters: [],
          coming_soon: []
        }
      }
    },
    created: function () {
      this.getMoive('/api/movie/in_theaters', 'in_theaters')
    },
    mounted: function () {
      this.getMoive('/api/movie/coming_soon', 'coming_soon')
    },
    methods: {
      getMoive: function (url, dataLocation) {
        axios({
          method: 'GET',
          url: url
        }).then((response) => {
          this.movieData[dataLocation] = response.data.subjects
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
