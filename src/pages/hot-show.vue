<template>
  <div class="hot-show">
    <p>
      <button @click="show='now'">正在热映</button>
      <button @click="show='future'">即将上映</button>
    </p>
    <being-relesed v-if="show==='now'"/>
    <future-relesed v-if="show==='future'"/>
  </div>
</template>
<script>
  import beingRelesed from '@/components/hot-show/being-relesed'
  import futureRelesed from '@/components/hot-show/future-relesed'
  export default {
    name: 'hotShow',
    data: function () {
      return {
        show: 'now'
      }
    },
    components: {
      'being-relesed': beingRelesed,
      'future-relesed': futureRelesed
    }
  }
</script>
