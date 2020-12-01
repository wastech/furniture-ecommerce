import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/admin/posts",
    name: "posts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../admin/posts.vue"),
  },

  {
    path: "/admin/product",
    name: "product",

    component: () =>
      import(/* webpackChunkName: "about" */ "../admin/product.vue"),
  },
  {
    path: "/admin/dashboard",
    name: "dashboard",

    component: () =>
      import(/* webpackChunkName: "about" */ "../admin/dashboard.vue"),
  },
  {
    path: "/paymentpage",
    name: "paymentpage",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/paymentPage.vue"),
  },
  {
    path: "/admin/login",
    name: "login",

    component: () =>
      import(/* webpackChunkName: "about" */ "../admin/login.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
  {
    path: "/address",
    name: "address",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue"),
  },
  {
    path: "/admin/addcategory",
    name: "addcategory",
    component: () =>
      import(/* webpackChunkName: "about" */ "../admin/addCategory.vue"),
  },
  {
    path: "/admin/orders",
    name: "orders",
    component: () =>
      import(/* webpackChunkName: "about" */ "../admin/orders.vue"),
  },
  {
    path: "/admin/owner",
    name: "owner",
    component: () =>
      import(/* webpackChunkName: "about" */ "../admin/owner.vue"),
  },
  {
    path: "/productdetail/:id",
    props: true,
    name: "productdetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/productDetail.vue"),
  },

  {
    path: "/category/:category",
    name: "category",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Category.vue"),
  },
  {
    path: "/paymentpage/:_id",
    name: "paymentid",
  
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/paymentId.vue"),
  },
];
 



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
