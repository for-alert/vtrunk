<template>
    <div>
        <h2>{{store.name}}</h2>
        <h2>{{store.address}}</h2>

        <v-flex xs12 sm6 offset-sm3>
            <v-textarea box v-model="message" label="メッセージ"></v-textarea>
        </v-flex>
        <h3>写真</h3>
        <input type="file" ref="pictureInput"/>
        <v-card-actions>
            <v-flex xs12 sm6 offset-sm3>
                <v-btn
                        @click="OnButtonClick"
                >
                    送信
                </v-btn>
                <image src=""
            </v-flex>
        </v-card-actions>
        <v-dialog
                v-model="dialog"
                max-width="1000"
        >
            <v-card>
                <v-card-title class="headline">こちらのお店で間違いありませんか？</v-card-title>

                <v-card-text>
                    <div>
                        <p>店名 : {{store.name}}</p>
                        <p>住所 : {{store.address}}</p>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="dialog = false"
                    >
                        いいえ
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="OnAddStore"
                    >
                        はい
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="getExp"
                max-width="500"
        >
            <v-card>
                <v-card-text>
                    <div>
                        経験値を{{exp}}取得しました。
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="getExp=false;OnExp()"
                    >
                        OK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="OpenLevelUp"
                max-width="500"
        >
            <v-card>
                <v-card-text>
                    <div>
                        レベルUP!!
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="levelUp = false;OnLevelUp();"
                    >
                        OK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Store from '@/api/protcol/store/Store';
    import SendStoreVue from '@/components/AddStore/SendStore';
    import {ApiClient} from '@/api/ApiClient';

    @Component({
        props: {
            store: Object,
        },
        components: {
            SendStoreVue,
        },
    })
    export default class SendStore extends Vue {
        private message = '';
        private store !: Store;
        private levelUp = false;
        private getExp = false;
        private dialog = false;

        private exp = 0;


        get OpenLevelUp() {
            return this.levelUp && this.getExp === false;
        }

        public OnButtonClick() {
            this.dialog = true;
        }

        private OnAddStore() {
            this.dialog = false;
            if (!this.$refs.pictureInput.files.length) {
                return;
            }
            const file = this.$refs.pictureInput.files[0];
            const fr = new FileReader();
            fr.onload = async (evt) => {
                const result = await new ApiClient()
                    .AddStore(this.store.id, this.$cookies.get('user_token'), evt.target.result, this.message);
                this.getExp = true;
                this.exp = result.getExp;
                this.levelUp = result.levelUp;

            };
            fr.readAsDataURL(file);
        }

        private OnExp() {
            if (this.OpenLevelUp === false) {
                this.$router.push('/stores');
            }
        }


        private OnLevelUp() {
            this.$router.push('/stores');
        }
    }
</script>

<style scoped>

</style>
