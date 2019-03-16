import Vue from 'vue';
import Router from 'vue-router';
import Mypage from '@/views/Mypage.vue';
import Ranking from '@/views/Ranking.vue';
import AddStore from '@/views/AddStore.vue';
import TestPage from '@/views/TestPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mypage',
      redirect: '/mypage',
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: Mypage,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking,
    },
    {
      path: '/addstore',
      name: 'addstore',
      component: AddStore,
    },
    {
      path: '/test',
      name: 'testpage',
      component: TestPage,
    },
  ],
});
