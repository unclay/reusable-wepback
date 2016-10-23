<template>
  <section>
    <ul class="story-cell--list">
      <li v-for="item in list" class="story-cell--item">
        <router-link class="story-cell__link" :to="item.to" v-if="item.to">
          <i class="story-cell--item__icon" :style="{ backgroundImage: 'url(' + item.pic + ')' }"></i>
          <div class="story-cell--item__content">
            <p class="content-title">{{ item.title }}</p>
            <p class="content-desc">{{ item.desc }}</p>
          </div>
        </router-link>

        <a class="story-cell__link" :href="item.href" v-else>
          <i class="story-cell--item__icon" :style="{ backgroundImage: 'url(' + item.pic + ')' }"></i>
          <div class="story-cell--item__content">
            <p class="content-title">{{ item.title }}</p>
            <p class="content-desc">{{ item.desc }}</p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  require('./home.less')
  export default {
    data () {
      return {
        list: [{
          title: 'BEM',
          desc: '源自Yandex的CSS 命名方法论',
          pic: '//cdn-img.easyicon.net/png/12029/1202960.gif',
          href: 'https://segmentfault.com/a/1190000000391762'
        }, {
          title: 'https',
          desc: 'HTTPS升级指南',
          pic: '//cdn-img.easyicon.net/png/11819/1181942.gif',
          href: 'http://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html'
        }, {
          title: '迈克尔·杰克逊',
          desc: '美国印第安纳州加里市出生',
          pic: '//cdn-img.easyicon.net/png/11819/1181942.gif',
          to: 'like'
        }]
      }
    }
  }
</script>

<style lang="less">
  @import '../css/reset.less';
</style>