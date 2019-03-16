import Vue from 'vue';
import Router from 'vue-router';
import Mypage from '@/views/Mypage.vue';
import Ranking from '@/views/Ranking.vue';
import AddStore from '@/views/AddStore.vue';
import Register from '@/views/Register.vue';

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
            path: '/register',
            name: 'register',
            component: Register,
        },
    ],
});
