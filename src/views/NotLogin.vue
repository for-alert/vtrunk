<template>
    <div id="unlogin">
        <div>
            <img src="../../public/title.png">
        </div>
        <v-btn color="primary" @click="OnLogin">ログイン</v-btn>
        <v-btn color="primary" @click="OnRegister">ユーザ登録</v-btn>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class NotLogin extends Vue {
        private OnLogin() {
            this.$router.push('/login');
        }

        private OnRegister() {
            this.$router.push('/register');
        }
    }
</script>

<style lang="scss">
    #unlogin {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        vertical-align: center;
        color: #2c3e50;
    }

</style>
