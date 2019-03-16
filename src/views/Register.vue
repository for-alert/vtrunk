<template>
    <div>
        <h1>ユーザ登録</h1>
        <div class="form-group">
            <label for="userName">ユーザ名</label>
            <div class="col-sm-10">
                <input id="userName" class="form-control" type="text" v-model="userName"/>
            </div>
        </div>
        <div class="form-group">
            <label for="sex">性別</label>
            <div id="sex" class="form-control">
                <select name="sex" v-model="sex">
                    <option value="男">男</option>
                    <option value="女">女</option>
                    <option value="非公開">非公開</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="birthday">誕生日</label>
            <div class="col-sm-10">
                <input id="birthday" class="form-control" type="text" v-model="birthday"/>
            </div>
        </div>
        <div class="form-group">
            <label for="password">パスワード</label>
            <div class="col-sm-10">
                <input id="password" class="form-control" type="password" v-model="password"/>
            </div>
        </div>
        <div class="form-group">
            <label for="password">パスワード再入力</label>
            <div class="col-sm-10">
                <input id="re_password" class="form-control" type="password" v-model="rePassword"/>
            </div>
        </div>
        <p class="alert alert-danger" v-show="message">{{message}}</p>
        <div class="col-sm-10">
            <button type="button" class="btn btn-primary" @click="click_register">登録</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {ApiClient} from '@/api/ApiClient';

    @Component
    export default class Register extends Vue {
        private userName = '';
        private sex = '';
        private birthday = '';
        private password = '';
        private rePassword = '';
        private message = '';

        private async Click_register() {
            if (!this.userName) {
                this.message = 'ユーザ名が入力されていません。';
                return;
            }
            if (!this.birthday) {
                this.message = '誕生日が入力されていません。';
                return;
            }
            if (!this.password) {
                this.message = 'パスワードが入力されていません。';
                return;
            }
            if (this.password !== this.rePassword) {
                this.message = 'パスワードが一致しません。';
                return;
            }

        }
    }
</script>

<style scoped>

</style>