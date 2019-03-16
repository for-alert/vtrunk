<template>
    <div>
        <h1>ログイン</h1>
        <form action class="box">
            <div class="form-group">
                <label for="userName">ユーザ名</label>
                <div class="col-sm-10">
                    <input id="userName" class="form-control" type="text" v-model="userName" required/>
                </div>
            </div>
            <div class="form-group">
                <label for="password">パスワード</label>
                <div class="col-sm-10">
                    <input id="password" class="form-control" type="password" v-model="password" required/>
                </div>
            </div>
            <p class="alert alert-danger" v-show="message">{{message}}</p><br>
            <div class="col-sm-10">
                <button type="submit" class="btn btn-primary" @click="OnClickLogin">ログイン</button>
            </div>
            <br>
            <div class="col-sm-10">
                <button type="button" class="btn btn-primary" @click="OnRegister">ユーザ登録</button>
            </div>
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