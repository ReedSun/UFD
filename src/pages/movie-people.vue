<template>
  <div class="movie-people">
    <mt-header class="header" title="电影" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
  </div>
</template>

<script>
  import { Header, Button } from 'mint-ui'
  export default {
    components: {
      mtHeader: Header,
      mtButton: Button
    }
  }
</script>
