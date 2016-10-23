<template>
  <div>
    <router-link class="story-btn--goback" to="/">返回</router-link>
    <img class="story-like--img-wrap" src="../img/jiekexun.jpg" alt="">
  </div>  
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style>
  .story-btn--goback {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    background-color: rgb(53, 159, 243);
    color: #fff;
    text-decoration: none;
  }
  .story-like--img-wrap {
    width: 100%;
  }
</style>