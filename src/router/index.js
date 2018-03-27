import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/login'
import Content from '../page/content'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    }, {
      path: '/content',
      component: Content
    }
  ]
})
