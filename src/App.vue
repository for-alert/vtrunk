<template>
    <div id="app">
        <v-app>
            <div id="nav" v-show="logined">
                <v-toolbar>
                    <img src="../public/title.png" width="457" height="71">
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn to="/mypage">マイページ</v-btn>
                        <v-btn to="/ranking">ランキング</v-btn>
                        <v-btn to="/stores">タイムライン</v-btn>
                        <v-btn @click="Logout" v-show="logined">ログアウト</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
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
                if (this.logined === false) {
                    this.$router.push('/notlogin');
                }

            } else {
                this.$router.push('/notlogin');
            }
        }

        private Logout() {
            this.logined = false;
            this.$cookies.remove('user_token');
            alert('ログアウトしました');
            this.$router.push('/NotLogin');
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
