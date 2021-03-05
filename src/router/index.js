import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Create from '../views/Create.vue'
import Login from '../views/user/Login.vue'
import Signup from '../views/user/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/p/:id',
    name: 'Post',
    component: Post,
  }, {
    path: '/create',
    name: 'Create',
    component: Create,
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next();
})

export default router
