import {UserSex} from "../api/protcol/user/UserSex";
import {UserSex} from "../api/protcol/user/UserSex";
<template>
    <div>
        <h1>ユーザ登録</h1>
        <form action class="box">
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field v-model="userName" label="ユーザ名"></v-text-field>
                <v-select
                        v-model="sex"
                        :items="['男', '女', '非公開']"
                        :item-value="['men', 'women', 'private']"
                        label="性別"></v-select>
                <v-text-field v-model="birthday" label="誕生日"></v-text-field>
                <v-text-field type="password" v-model="password" label="パスワード"></v-text-field>
                <v-text-field type="password" v-model="rePassword" label="パスワード再入力"></v-text-field>
                <v-alert color="error" icon="warning" outline v-show="message">{{message}}</v-alert>
            </v-flex>
            <v-btn color="primary" @click="OnClick_register">登録</v-btn>
            <v-btn color="primary" @click="OnLogin">ログイン</v-btn>
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
        private sex: UserSex | null = null;
        private birthday = '';
        private password = '';
        private rePassword = '';
        private message = '';

        private OnLogin() {
            this.$router.push('/login');
        }

        private async OnClick_register() {
            if (!this.userName) {
                this.message = 'ユーザ名が入力されていません。';
                return;
            }
            if (!this.sex) {
                this.message = '性別が選択されていません。';
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
            try {
                const token = await new ApiClient().CreateUser({
                    user_name: this.userName,
                    sex: this.sex,
                    pass: this.password,
                    birthday: this.birthday,
                });
                this.$cookies.set('user_token', token);
                this.$router.push('/mypage');
            } catch (e) {
                alert(e);
            }
        }
    }
</script>

<style scoped>

</style>
