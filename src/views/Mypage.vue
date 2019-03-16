import {UserSex} from "../api/protcol/user/UserSex";
<template>
    <div>
        <v-flex xs12 sm6 offset-sm3>
            <h1>マイページ</h1>
            <v-card>
                <v-card-title>
                    <h2 class="justify-center">ユーザ名 : {{user.userName}}</h2>
                </v-card-title>
                <v-card-text>
                    <h3>性別 : {{user.sex}}</h3>
                    <h3>誕生日 : {{user.birthday}}</h3>
                    <h3>レベル : {{user.level}}</h3>
                    <h3>経験値 : {{user.exp}}</h3>
                </v-card-text>
            </v-card>
            <v-btn to="/addstore">店舗登録</v-btn>
        </v-flex>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {PublicUser} from '@/api/protcol/user/PublicUser.ts';
    import {ApiClient} from '@/api/ApiClient';

    @Component
    export default class Mypage extends Vue {
        private user: PublicUser = {
            userId: 0,
            userName: '',
            sex: '' as any,
            birthday: '',
            level: 0,
            exp: 0,
        };

        private async created() {
            this.user = (await new ApiClient().GetPublicUserByToken(this.$cookies.get('user_token')));
        }

    }
</script>

<style scoped>

</style>
