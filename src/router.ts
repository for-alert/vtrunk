import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mypage from '@/views/Mypage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/mypage',
      name: 'mypage',
      component: Mypage,
    },
  ],
});
