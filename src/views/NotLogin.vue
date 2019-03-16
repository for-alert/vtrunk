<template>
    <div id="unlogin">
        <div>
            <img src="../../public/title.png">
        </div>
        <div>
            <button @click="OnLogin">ログイン</button>
        </div>
        <br>
        <div>
            <button @click="OnRegister">ユーザ登録</button>
        </div>
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