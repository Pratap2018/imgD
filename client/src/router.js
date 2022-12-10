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
        name: 'home',
        component: App,
        meta: {
          requiresAuth: false,
             title: `${config.app.name} - Upload images--free`
        } 
      },
    ]
})
