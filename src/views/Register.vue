import {UserSex} from "../api/protcol/user/UserSex";
import {UserSex} from "../api/protcol/user/UserSex";
<template>
    <div>
        <h1>ユーザ登録</h1>
        <form action class="box">
            <div class="form-group">
                <label for="userName">ユーザ名</label>
                <div class="col-sm-10">
                    <input id="userName" class="form-control" type="text" v-model="userName" required/>
                </div>
            </div>
            <div class="form-group">
                <label for="sex">性別</label>
                <div id="sex" class="form-control">
                    <select name="sex" v-model="sex">
                        <option value="man">男</option>
                        <option value="woman">女</option>
                        <option value="private">非公開</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="birthday">誕生日</label>
                <div class="col-sm-10">
                    <input id="birthday" class="form-control" type="text" v-model="birthday" required/>
                </div>
            </div>
            <div class="form-group">
                <label for="password">パスワード</label>
                <div class="col-sm-10">
                    <input id="password" class="form-control" type="password" v-model="password" required/>
                </div>
            </div>
            <div class="form-group">
                <label for="password">パスワード再入力</label>
                <div class="col-sm-10">
                    <input id="re_password" class="form-control" type="password" v-model="rePassword" required/>
                </div>
            </div>
            <p class="alert alert-danger" v-show="message">{{message}}</p>
            <div class="col-sm-10">
                <button type="submit" class="btn btn-primary" @click="OnClick_register">登録</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {ApiClient} from '@/api/ApiClient';
    import {UserSex} from '@/api/protcol/user/UserSex';

    @Component
    export default class Register extends Vue {
        private userName = '';
        private sex: UserSex = UserSex.Private;
        private birthday = '';
        private password = '';
        private rePassword = '';
        private message = '';

        private async OnClick_register() {
            if (!this.userName) {
                this.message = 'ユーザ名が入力されていません。';
                return;
            }
            if (!this.sex) {
                this.message = '性別が選択されていません。';
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
            if (this.sex === '男') {
                try {
                    const token = await new ApiClient().CreateUser({
                        user_name: this.userName,
                        sex: this.sex,
                        pass: this.password,
                        birthday: this.birthday,
                    });
                    this.$router.push('/mypage');
                } catch (e) {
                    alert(e);
                }
            }

        }
    }
</script>

<style scoped>

</style>