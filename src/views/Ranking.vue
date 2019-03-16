<template>
    <div>　　
        <h1>ランキング</h1>
        <v-card class="card">
            <div v-for="(user,index) in users">
                <v-card-title class="card-title">
                    <p>{{index+1}}位 : ユーザ名：{{user.userName}}</p>
                </v-card-title>
                <v-card-text class="card-text">
                    <p>　level：{{user.level}}</p>
                </v-card-text>
            </div>
        </v-card>
    </div>
</template>

<script lang="ts">
    import {PublicUser} from '@/api/protcol/user/PublicUser.ts';
    import {Component, Vue} from 'vue-property-decorator';
    import {ApiClient} from '@/api/ApiClient';

    @Component
    export default class Ranking extends Vue {
        private users: PublicUser[] = [];
        private rank = 0;

        private async created() {
            // ここにさーばから取得したデータ入れる。
            this.users = await new ApiClient().GetPublicUsers();
        }
    }
</script>

<style scoped>

</style>
