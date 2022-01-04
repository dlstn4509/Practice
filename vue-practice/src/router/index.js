import Vue from 'vue';
import VueRouter from 'vue-router';

import Search from '../views/Search.vue';
import Canvas from '../views/Canvas.vue';
import Sequelize from '../views/Sequelize.vue';
import KakaoMap from '../views/KakaoMap.vue';
import Gongsil from '../views/Gongsil.vue';

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
  {
    path: '/kakaomap',
    name: 'KakaoMap',
    component: KakaoMap,
  },
  {
    path: '/gongsil',
    name: 'Gongsil',
    component: Gongsil,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
