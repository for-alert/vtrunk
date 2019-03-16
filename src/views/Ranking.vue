<template>
    <div>　　
        <h1>ランキング</h1>
        <div v-for="(user,index) in users">
            <div class="card-body">
                <p class="user-info">{{index+1}}位 : ユーザ名：{{user.userName}}　level：{{user.level}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import User from '@/api/protcol/user/PublicUser.ts';
import {Component, Vue} from 'vue-property-decorator';
import {ApiClient} from '@/api/ApiClient';

@Component
export default class Ranking extends Vue {
    private users: User[] = [];
    private rank = 0;

    private async created() {
        // ここにさーばから取得したデータ入れる。
        this.users = await new ApiClient().GetPublicUsers();
    }
}
</script>

<style scoped>

</style>
