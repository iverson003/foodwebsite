import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../page/home.vue';
import h5HomePage from '../page/h5Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/h5',
    name: 'h5Home',
    component: h5HomePage,
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
