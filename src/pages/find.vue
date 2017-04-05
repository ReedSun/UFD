<template>
  <div class="find">
    <p>
      <button @click="show='top250'">Top250</button>
      <button @click="show='box-office'">北美票房榜</button>
    </p>
    <find-top250 v-if="show==='top250'"/>
    <find-box-office v-if="show==='box-office'"/>
  </div>
</template>
<script>
  import findTop250 from '@/components/find/find-top250.vue'
  import findBoxOffice from '@/components/find/find-box-office.vue'
  export default {
    name: 'find',
    data: function () {
      return {
        show: 'top250'
      }
    },
    components: {
      'find-top250': findTop250,
      'find-box-office': findBoxOffice
    }
  }
</script>
