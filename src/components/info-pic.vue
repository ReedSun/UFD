<template>
  <div class="info-pic">
    <div class="header">
      <img class="header-pic" :src="this.img">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'info-pic',
    props: {
      img: {
        type: String,
        required: true
      }
    }
  }
</script>
<style scoped>
  .header {
    margin-top: 40px;
    background-color: #232323;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .header-pic {
    height: 350px;
  }
</style>
