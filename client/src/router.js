import config from './config'
import { createWebHistory, createRouter } from "vue-router";
import home from './views/home'
import diplay from './views/display.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        requiresAuth: false,
           title: `${config.app.name} - Upload images--free`
      } 
    },
    {
      path: '/resolve/:id',
      name: 'display',
      component: diplay,
      meta: {
        requiresAuth: false,
           title: `${config.app.name} - Upload images--free`
      } 
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;