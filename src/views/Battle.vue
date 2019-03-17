import {UserSex} from "../api/protcol/user/UserSex";
import {BattleState} from "./BattleState";
import {BattleState} from "./BattleState";
import {BattleState} from "./BattleState";
<template>
    <div id="battle">
        <v-container grid-list-md text-md-center>
            <v-layout row wrap>
                <v-flex md1></v-flex>
                <v-flex md3>
                    <v-card>
                        <h1>{{myUser.userName}}</h1>
                        <v-card-text>
                            <h2>{{myUser.level}}</h2>
                        </v-card-text>
                        <v-card-text v-if="state === 'last_wait'">
                            <h2>{{Cut(battleResult.fix)}}</h2>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md2></v-flex>
                <h1>VS</h1>
                <v-flex md2></v-flex>
                <v-flex md3>
                    <v-card>
                        <h1>{{battleResult.battleUser.userName}}</h1>
                        <v-card-text v-if="state === 'wait'">
                            <h2>{{moveNumber % 100}}</h2>
                        </v-card-text>
                        <v-card-text v-else-if="state === 'last_wait'">
                            <h2>{{battleResult.battleUser.level}}</h2>
                        </v-card-text>
                        <v-card-text v-if="state === 'last_wait'">
                            <h2>{{Cut(1 - battleResult.fix)}}</h2>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card-text v-if="state === 'last_wait'">
                        <h1>{{battleResult.win ? "勝利" : "敗北"}}</h1>
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-container>
        <v-dialog max-width="350" v-model="Dialog">
            <v-card>
                <v-card-text>
                    <p>{{message}}</p>
                    <p>{{lvmessage}}</p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="OnClose"
                           color="green darken-1"
                           flat="flat">
                        OK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {PublicUser} from '../api/protcol/user/PublicUser';
import {ApiClient} from '../api/ApiClient';
import {RandomBattle} from '../api/protcol/battle/RandomBattle';
import {BattleState} from '@/views/BattleState';
import {UserSex} from '@/api/protcol/user/UserSex';

@Component
export default class Battle extends Vue {
    private myUser: PublicUser = {
        userId: 0,
        userName: '',
        sex: UserSex.Men,
        birthday: '',
        nextExp: 0,
        exp: 0,
        level: 0,
    };
    private battleResult: RandomBattle = {
        win: false,
        fix: 0,
        levelUp: {
            getExp: 0,
            levelUp: false,
        },
        battleUser: {
            userId: 0,
            userName: '',
            sex: UserSex.Men,
            birthday: '',
            nextExp: 0,
            exp: 0,
            level: 0,
        },
    };

    private state: BattleState = BattleState.Wait;

    private timer: number = 0;
    private countDown: number = 0;

    private moveNumber: number = 0;

    private dialog: boolean = false;
    private message: string = '';
    private lvmessage = '';

    public get Dialog() {
        return this.dialog;
    }

    public set Dialog(v: boolean) {
        if (!v) {
            this.OnClose();
        }

        this.dialog = v;
    }

    private async created() {
        const WAIT_COUNT_DOWN_TIME = 2000;
        const token = this.$cookies.get('user_token');
        if (token) {
            const api = new ApiClient();
            this.myUser = await api.GetPublicUserByToken(token);
            this.battleResult = await api.RandomBattle(token);
            this.countDown = WAIT_COUNT_DOWN_TIME;
        } else {
            this.$router.push('/');
            return;
        }

        this.Wait();
    }

    private Wait() {
        this.timer = setInterval(() => {
            if (this.countDown <= 0) {
                this.state = BattleState.Last_Wait;
                clearInterval(this.timer);
                this.LastWait();
                return;
            }

            this.moveNumber++;
            this.countDown--;
        }, 1);
    }


    private LastWait() {
        const START_COUNT_DOWN_TIME = 1000;
        this.countDown = START_COUNT_DOWN_TIME;
        this.timer = setInterval(() => {
            if (this.countDown <= 0) {
                this.state = BattleState.End;
                clearInterval(this.timer);
                this.dialog = true;
                this.message = this.battleResult.levelUp ?
                    '経験値を' + this.battleResult.levelUp.getExp + '取得しました。' :
                    '敗北しました。';
                if (this.battleResult.levelUp) {
                    this.lvmessage = this.battleResult.levelUp.levelUp ? '\nレベルUP!!' : '';
                }
            }

            this.countDown--;
        }, 1);
    }

    private Cut(val: number) {
        const c = val * 100;
        return Math.floor(c) / 100;
    }

    private OnClose() {
        this.dialog = false;
        this.$router.push('/');
    }
}
</script>

<style scoped>

</style>
