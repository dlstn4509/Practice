import Vue from 'vue';
import VueRouter from 'vue-router';

import Search from '../views/Search.vue';
import Canvas from '../views/Canvas.vue';
import Sequelize from '../views/Sequelize.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search,
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: Canvas,
  },
  {
    path: '/sequelize',
    name: 'Sequelize',
    component: Sequelize,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
