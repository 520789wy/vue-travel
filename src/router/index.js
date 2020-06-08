import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/Home.vue'
import City from '../page/city/City.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/city',
      component:City
    }
  ]
})
