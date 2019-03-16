<template>
    <div>　　
        <h1>ランキング</h1>
        <div v-for="(user,index) in users">
            <v-flex xs12 sm6 offset-sm3>
                <v-card class="card">
                    <div class="card-body">
                        <p>{{index+1}}位 : ユーザ名：{{user.userName}}</p>
                        <p>level：{{user.level}}</p>
                    </div>
                </v-card>
            </v-flex>
        </div>
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
