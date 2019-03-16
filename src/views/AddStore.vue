<template>
    <div>
        <h1>店舗追加</h1>
        <div>
            <v-form>
                <v-flex xs12 sm6 offset-sm3>
                    <nobr>
                        <v-text-field
                                v-model="searchStore"
                                label="店名"
                                style="display: inline-block; _display: inline;">
                        </v-text-field>
                        <v-btn @click="OnButtonClick">検索</v-btn>
                    </nobr>
                </v-flex>
            </v-form>
        </div>
        <stores v-if="!selectedStoreFlag" @add-store="OnDialog" :stores="stores"></stores>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <p v-show="!stores.length && !firstFlag">店舗が見つかりませんでした。</p>
                </v-card>
            </v-flex>
        </v-layout>
        <send-store v-if="selectedStoreFlag" @send-store="OnAddStore" :store="selectedStore"
                    :firstFlag="false"></send-store>
        <v-dialog
                v-model="dialog"
                max-width="1000"
        >
            <v-card>
                <v-card-title class="headline">こちらのお店で間違いありませんか？</v-card-title>

                <v-card-text>
                    <div>
                        <p>店名 : {{name}}</p>
                        <p>住所 : {{address}}</p>
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
                            @click="OnAddStore(id)"
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
                            @click="OnLevelUp()"
                    >
                        OK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="openLevelUp"
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
                            @click="openLevelUp = false"
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
import {ApiClient} from '@/api/ApiClient';
import CheckLogin from '@/CheckLogin';
import Stores from '@/components/AddStore/Stores';
import SendStore from '@/components/AddStore/SendStore.vue';

@Component({components: {SendStore, Stores}})
export default class AddStore extends Vue {
    private stores: Store[] = [];
    private searchStore = '';
    private dialog = false;
    private name = '';
    private address = '';
    private id = 0;
    private levelUp = false;
    private exp = 0;
    private getExp = false;
    private openLevelUp = false;
    private selectedStoreFlag = false;
    private selectedStore: Store | null = null;
    private firstFlag = true;

    private created() {
        CheckLogin(this);
    }

    private async OnButtonClick() {
        if (this.searchStore) {
            this.firstFlag = false;
            this.stores = await new ApiClient().FindStoreName(this.searchStore);
        }
    }

    private OnDialog(name: string, address: string, id: number) {
        // this.name = name;
        // this.address = access;
        // this.id = id;
        // this.dialog = true;
        this.selectedStore = {name, address, id};
        this.selectedStoreFlag = true;
    }

    private OnLevelUp() {
        this.getExp = false;
        if (this.levelUp) {
            this.openLevelUp = true;
        }
    }

    private async OnAddStore(id: number) {
        const result = await new ApiClient().AddStore(String(id), this.$cookies.get('user_token'), 'yeay', 'oicくそ');
        this.stores = [];
        this.dialog = false;
        this.levelUp = result.levelUp;
        this.exp = result.getExp;
        this.getExp = true;

    }
}
</script>

<style scoped>

</style>
