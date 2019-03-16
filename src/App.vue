<template>
    <div id="app">
        <v-app>
            <div id="nav" v-show="logined">
                <router-link to="/">マイページ</router-link>
                |
                <router-link to="/ranking">ランキング</router-link>
                |
                <router-link to="/register">ユーザ登録</router-link>
                |
                <router-link to="/login" v-show="!logined">ログイン</router-link>
                <button @click="Logout" v-show="logined">ログアウト</button>
            </div>
            <router-view/>
        </v-app>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {ApiClient} from '@/api/ApiClient';

    @Component
    export default class App extends Vue {
        private logined = false;

        private async created() {
            if (this.$cookies.get('user_token')) {
                this.logined = !!(await new ApiClient().GetPublicUserByToken(this.$cookies.get('user_token')));
            } else {
                this.$router.push('/notlogin');
            }
        }

        private Logout() {
            this.logined = false;
            this.$cookies.remove('user_token');
            alert('ログアウトしました');
            this.$router.push('/login');
            window.location.reload();
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: darkorange;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
