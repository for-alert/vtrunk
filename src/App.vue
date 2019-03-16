<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">マイページ</router-link>
            |
            <router-link to="/ranking">ランキング</router-link>
            |
            <router-link to="/register">ユーザ登録</router-link>
            |
            <router-link to="/login" v-show="!logined">ログイン</router-link>
            <a @click="Logout" v-show="logined">ログアウト</a>
        </div>
        <router-view/>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class App extends Vue {
    private logined = true;

    private Logout() {
        this.logined = false;
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