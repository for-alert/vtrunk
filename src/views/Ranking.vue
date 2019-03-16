<template>
    <div>　　
        <h1>ランキング</h1>
        <div v-for="(user,index) in users">
            <v-flex xs12 sm6 offset-sm3>
                <v-card class="card">
                    <div class="card-body">
                        <p>{{index+1}}位 : {{user.userName}}様</p>
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
            this.users = await new ApiClient().GetPublicUsers();
            this.users.sort((a, b) => {
                if (a.level > b.level) {
                    return -1;
                }
                if (a.level < b.level) {
                    return 1;
                }
                return 0;
            });
            if (this.users.length > 30) {
                this.users.splice(30, this.users.length - 30);
            }
        }
    }
</script>

<style scoped>

</style>
