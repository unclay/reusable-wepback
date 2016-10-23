// base list
import Vue from 'vue'
import Router from 'vue-router'
import App from './page/home'

Vue.use(Router)

const routes = [{
  path: '/',
  component: App
}, {
  path: '/like',
  component: require('./page/like')
}]
const router = new Router({
  routes
})

const app = new Vue({
  // el: '#app',
  router,
  // template: '<router-view></router-view>'
  // render: h => h({
  //   template: '<router-view></router-view>asdf'
  // })
}).$mount('#app')
