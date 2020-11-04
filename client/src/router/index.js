import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/productDetail',
    name: 'productdetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/productDetail.vue')
  },
  {
    path: '/chairs',
    name: 'chairs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chairs.vue')
    
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
