import Vue from 'vue';
import Router from 'vue-router';
import Mypage from '@/views/Mypage.vue';
import Ranking from '@/views/Ranking.vue';
import AddStore from '@/views/AddStore.vue';
import TestPage from '@/views/TestPage.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import NotLogin from '@/views/NotLogin.vue';
import Battle from '@/views/Battle.vue';
import Stores from '@/views/Stores.vue';
import MapView from '@/views/MapView.vue';

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
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/test',
            name: 'testpage',
            component: TestPage,
        },
        {
            path: '/notlogin',
            name: 'notlogin',
            component: NotLogin,
        },
        {
            path: '/map',
            name: 'map',
            component: MapView,
        },
        {
            path: '/stores',
            name: 'stores',
            component: Stores,
        },
        {
            path: '/battle',
            name: 'battle',
            component: Battle,
        },
    ],
});
