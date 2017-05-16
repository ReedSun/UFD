<template>
  <div class="movie-people-message">
    <div class="people-message-wrapper">
      <div class="people-message">
        <h1>{{name}}</h1>
        <p v-if="gender">性别：{{gender}}</p>
        <p v-if="name_en">英文名：{{name_en}}</p>
        <p v-if="born_place">出生地：{{born_place}}</p>
        <p v-if="aka.length">更多中文名:
          <span class="detail-item-item" v-for="item in aka">{{item}}</span>
        </p>
        <p v-if="aka_en.length">更多英文名: 
          <span class="detail-item-item" v-for="item in aka_en">{{item}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'movie-people-message',
    props: {
      name: {
        type: String,
        require: true
      },
      name_en: {
        type: String,
        require: true
      },
      gender: {
        type: String,
        require: true
      },
      born_place: {
        type: String,
        require: true
      },
      aka: {
        type: Array,
        require: true,
        default: () => {
          return []
        }
      },
      aka_en: {
        type: Array,
        require: true,
        default: () => {
          return []
        }
      }
    }
  }
</script>
<style scoped>
  .people-message-wrapper {
    position: relative;
    padding: 20px;
    border-bottom: 1px solid #eee;
  }
  .people-message {
    text-align: left;
  }
  .people-message>h1 {
    font-size: 30px;
    margin-bottom: 5px;
  }
  .people-message>p {
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
</style>
