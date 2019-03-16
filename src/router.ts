import Vue from 'vue';
import Router from 'vue-router';
import Mypage from '@/views/Mypage.vue';
import Ranking from '@/views/Ranking.vue';

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
    ],
});
