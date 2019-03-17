<template>
    <div>
        <h1>店舗検索</h1>
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
        <map-view v-if="stores && location" :stores="stores" :pos="location"></map-view>
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

    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Store from '@/api/protcol/store/Store';
    import {ApiClient} from '@/api/ApiClient';
    import CheckLogin from '@/CheckLogin';
    import Stores from '@/components/AddStore/Stores';
    import SendStore from '@/components/AddStore/SendStore.vue';
    import MapView from '@/views/MapView.vue';

    @Component({components: {MapView, SendStore, Stores}})
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
        private location: any[] | null = null;

        private created() {
            CheckLogin(this);
        }

        private async OnButtonClick() {
            if (this.searchStore) {
                this.firstFlag = false;
                navigator.geolocation.getCurrentPosition(async (p) => {
                    this.location = [p];
                    this.stores =
                        await new ApiClient().FindStoreName(this.searchStore, p.coords.latitude, p.coords.longitude);
                });
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
