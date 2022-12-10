import Vue from 'vue'
import Router from 'vue-router'
import config from './config'

import App from './App'
import fetch from 'node-fetch'
Vue.use(Router)

const router =  new Router({
    mode: 'hash',
    routes: [
      {
        path: '/',
        redirect: '/App',
        requiresAuth:true,
      }
    ]
})
