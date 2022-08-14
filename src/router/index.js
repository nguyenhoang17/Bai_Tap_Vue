import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product',
    component: ()=> import('../views/Bai5/ProductPage.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: ()=> import('../views/Bai5/ProductPage.vue')
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: ()=> import('../views/Bai5/InvoicePage.vue')
  },
  {
    path: '/statistical',
    name: 'statistical',
    component: ()=> import('../views/Bai5/StatisticalPage.vue')
  },
  {
    path: '/branch',
    name: 'branch',
    component: ()=> import('../views/Bai5/BranchPage.vue'),
    children:[
      {
        path: 'branch-product',
        name: 'branch-product',
        component: () => import( '../views/Bai5/branch-product.vue'),
      },
      {
        path: 'branch-invoice',
        name: 'branch-invoice',
        component: () => import( '../views/Bai5/branch-invoice.vue'),
      },
      {
        path: 'branch-user',
        name: 'branch-user',
        component: () => import( '../views/Bai5/branch-user.vue'),
      },
      {
        path: 'branch-turnover',
        name: 'branch-turnover',
        component: () => import( '../views/Bai5/branch-turnover.vue'),
      },
      {
        path: 'branch-inventory',
        name: 'branch-inventory',
        component: () => import( '../views/Bai5/branch-inventory.vue'),
      },
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: ()=> import('../views/Bai5/SettingPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/Bai5/LoginView.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ()=> import('../views/Bai5/ForgotPass.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: '/products',
  //   name: 'products',
  //   component: () => import( '../views/ProductsView.vue')
  // },
  {
    path: '/users/:userId',
    name: 'users',
    component: () => import( '../views/UserView.vue'),
    children:[
      {
        path: 'profile',
        name: 'userProfile',
        component: () => import( '../views/ProfileView.vue'),
      },
      {
        path: 'post',
        name: 'userPost',
        component: () => import( '../views/PostView.vue'),
      }
    ]
  },
  {
    path: '/learn-vuex',
    name: 'learn-vuex',
    component: () => import( '../components/LT/Buoi_7/LearnVuex.vue')
  },
  {
    path: '/learn-vuex2',
    name: 'learn-vuex2',
    component: () => import( '../components/LT/Buoi_7/LearnVuex2.vue')
  },
  // {
  //   path: '/bai7-1',
  //   name: 'bai7-1',
  //   component: () => import( '../views/Bai7/Bai1View.vue')
  // },
  {
    path: '/bai7-2',
    name: 'bai7-2',
    component: () => import( '../views/Bai7/Bai2View.vue')
  },
  {
    path: '/bai8',
    name: 'bai8',
    component: () => import( '../views/Buoi8/BaseLayout.vue')
  },
  {
    path: '/bai8-product',
    name: 'bai8-product',
    component: () => import( '../views/Buoi8/ProductView.vue')
  },
  {
    path: '/bai8-order',
    name: 'bai8-order',
    component: () => import( '../views/Buoi8/OrderView.vue')
  },
  {
    path: '/lodash',
    name: 'lodash',
    component: () => import( '../views/lodashDemo.vue')
  },
  {
    path: '/products',
    name: 'Product',
    component: () => import( '../views/CallApi.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
