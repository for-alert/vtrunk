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
                        :items="items"
                        item-text="state"
                        item-value="abbr"
                        label="性別"></v-select>
                <v-select
                        v-model="year"
                        :items="years"
                        :item-value="years"
                        label="誕生日 年"></v-select>
                <v-select
                        v-model="month"
                        :items="monthes"
                        :item-value="monthes"
                        label="誕生日　月"></v-select>
                <v-select
                        v-model="day"
                        :items="days"
                        :item-value="days"
                        label="誕生日　日"></v-select>
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
        private items = [
            {state: '男', abbr: 'man'},
            {state: '女', abbr: 'woman'},
            {state: '非公開', abbr: 'private'},
        ];
        private years: string[] = [];
        private monthes: string[] = [];
        private days: string[] = [];
        private day = '';
        private year = '';
        private month = '';
        private i = 1;

        private created() {
            for (this.i; this.i <= 31; this.i++) {
                if (this.i <= 9) {
                    this.days.push('0' + this.i.toString());
                } else {
                    this.days.push(this.i.toString());
                }
            }
            this.i = 1;
            for (this.i; this.i <= 12; this.i++) {
                if (this.i <= 9) {
                    this.monthes.push('0' + this.i.toString());
                } else {
                    this.monthes.push(this.i.toString());
                }
            }
            this.i = 0;
            for (this.i; this.i <= 100; this.i++) {
                this.years.push((1950 + this.i).toString());
            }

        }

        private OnLogin() {
            this.$router.push('/login');
        }

        private async OnClick_register() {
            this.birthday = this.year + '-' + this.month + '-' + this.day;

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
                window.location.reload();
            } catch (e) {
                alert(e);
            }
        }
    }
</script>

<style scoped>

</style>
