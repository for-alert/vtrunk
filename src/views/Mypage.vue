<template>
    <div>
        <h1>マイページ</h1>
        <p>ユーザ名 : {{user.userName}}</p>
        <p>性別 : {{user.sex}}</p>
        <p>誕生日 : {{user.birthday}}</p>
        <p>レベル : {{user.level}}</p>
        <p>経験値 : {{user.exp}}</p>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import User from '@/api/protcol/user/PublicUser.ts';
import {ApiClient} from '@/api/ApiClient';

@Component
export default class Mypage extends Vue {
    private user: User = {
        userId: 0,
        userName: '',
        sex: '',
        birthday: '',
        level: 0,
        exp: 0,
    };

    private async created() {
        this.user = (await new ApiClient().GetPublicUsers()).pop();
    }

}
</script>

<style scoped>

</style>
