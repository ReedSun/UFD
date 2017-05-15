<template>
  <div class="movie-people">
    <mt-header class="header" title="影人" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    <movie-detail-header :img="peopleInfo.avatars.large"></movie-detail-header>
  </div>
</template>

<script>
  import { Header, Button, Indicator, MessageBox } from 'mint-ui'
  import axios from 'axios'
  import movieDetailHeader from '@/components/movie-detail-header'
  export default {
    data () {
      return {
        peopleInfo: {
          avatars: {
            large: 'http://i2.muimg.com/567571/dfc81d4142229b4a.png'
          }
        }
      }
    },
    components: {
      mtHeader: Header,
      mtButton: Button,
      movieDetailHeader
    },
    created () {
      this.getPeopleInfo()
    },
    methods: {
      getPeopleInfo () {
        Indicator.open()
        axios({
          methods: 'GET',
          url: '/api/movie/celebrity/' + this.$route.params.id
        }).then((response) => {
          Indicator.close()
          if (response.status === 200) {
            this.peopleInfo = response.data
          } else {
            MessageBox('错误', '出错了，请检查刷新重试。')
          }
        })
      }
    }
  }
</script>
