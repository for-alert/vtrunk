<template>
    <div>
        　　　
        <div v-for="(user,index) in users">
            <div class="card-body">
                <p class="user-info">{{index+1}}位 : ユーザ名：{{user.userName}}　level：{{user.level}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import User from '@/api/protcol/User.ts';
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Ranking extends Vue {
    private users: User[] = [];
    private rank = 0;

    private created() {
        // ここにさーばから取得したデータ入れる。
        this.users.push({userId: 4274, userName: 'hoge', sex: 'ネカマ', birthday: '9999/99/99', level: 1, exp: 0});
        alert('hoge');
    }
}
</script>

<style scoped>

</style>