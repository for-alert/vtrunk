<template>
    <div>
        <h1>ログイン</h1>
        <form action>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field v-model="userName" label="ユーザー名"></v-text-field>
                <v-text-field type="password" v-model="password" label="パスワード"></v-text-field>
                <v-alert color="error" icon="warning" outline v-show="message">{{message}}</v-alert>
            </v-flex>
            <v-btn type="submit" color="primary" @click="OnClickLogin">ログイン</v-btn>
            <v-btn type="button" color="primary" @click="OnRegister">ユーザ登録</v-btn>
        </form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {ApiClient} from '@/api/ApiClient';

    @Component
    export default class Register extends Vue {
        private userName = '';
        private password = '';
        private message = '';

        private OnRegister() {
            this.$router.push('/register');
        }

        private async OnClickLogin() {
            if (!this.userName) {
                this.message = 'ユーザ名が入力されていません。';
                return;
            }
            if (!this.password) {
                this.message = 'パスワードが入力されていません。';
                return;
            }
            try {
                const token = await new ApiClient().LoginUser(this.password, this.userName);
                this.$cookies.set('user_token', token);
                this.$router.push('/mypage');
                window.location.reload();
            } catch (e) {
                this.message = 'ユーザ名またはパスワードが間違っています。';
            }

        }
    }
</script>

<style scoped>

</style>

<style scoped>

</style>
