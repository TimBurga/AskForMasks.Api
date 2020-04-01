import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueAnalytics from "vue-analytics"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/makemask',
    name: 'Make a mask',
    component: () => import(/* webpackChunkName: "about" */ '../views/MakeMask.vue')
  },
  {
    path: '/provider',
    name: 'Provider',
    component: () => import(/* webpackChunkName: "about" */ '../views/Provider.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/thankyou',
    name: 'ThankYou',
    component: () => import(/* webpackChunkName: "about" */ '../views/ThankYou.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  },
  {
    path: '/add-feedback',
    name: 'AddFeedback',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddFeedback.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

if (location.href.indexOf("askformasks.com") > 0) {
  Vue.use(VueAnalytics, {
    id: 'UA-162159630-1',
    router
  });
}
export default router
