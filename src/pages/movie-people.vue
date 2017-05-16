<template>
  <div class="movie-people">
    <mt-header class="header" title="影人" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    <info-pic :img="peopleInfo.avatars.large"></info-pic>
    <movie-people-message :name="peopleInfo.name" :name_en="peopleInfo.name_en" :gender="peopleInfo.gender" :born_place="peopleInfo.born_place" :aka="peopleInfo.aka" :aka_en="peopleInfo.aka_en"></movie-people-message>
    <movie-people-work :work="peopleInfo.works"></movie-people-work>
  </div>
</template>

<script>
  import { Header, Button, Indicator, MessageBox } from 'mint-ui'
  import axios from 'axios'
  import infoPic from '@/components/info-pic'
  import moviePeopleMessage from '@/components/movie-people-message'
  import moviePeopleWork from '@/components/movie-people-work'
  export default {
    name: 'movie-people',
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
      infoPic,
      moviePeopleMessage,
      moviePeopleWork
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
