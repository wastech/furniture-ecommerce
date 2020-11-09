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
    path: '/chairs',
    name: 'chairs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chairs.vue')
    
  },
  {
    path: '/admin/product',
    name: 'product',

    component: () => import(/* webpackChunkName: "about" */ '../admin/product.vue')
    
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chart.vue')
  },
  {
    path: '/admin/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "about" */ '../admin/category.vue')
  },
  {
    path: '/admin/owner',
    name: 'owner',
    component: () => import(/* webpackChunkName: "about" */ '../admin/owner.vue')
  },
  {
    path: '/productdetail/:id',
    props: true,
    name: 'productdetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/productDetail.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
