<template>
    <div>
        <h1>店舗追加</h1>
        <div v-for="store in stores">
            <div class="store-body">
                <a @click="On_ButtonClick" class="store-info">店名：{{store.storeName}}　住所：{{store.storeAddress}}</a>
                <dialog v-model="dialog" max-width="500px">
                    <v-card>
                        <span>店舗確認</span>
                        <p>店舗に間違いありませんか？</p>

                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="close">キャンセル</v-btn>
                    </v-card>
                </dialog>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

interface Stores {
    storeId: number;
    storeName: string;
    storeAddress: string;
}

@Component
export default class AddStore extends Vue {
    private stores: Stores[] = [];
    private dialog = false;

    private created() {
        // ここにさーばから取得したデータ入れる。
        this.stores.push({storeId: 0, storeName: 'hoge aho店', storeAddress: 'hoge県hoge市huge町'});
    }

    private On_ButtonClick() {
        this.dialog = true;
    }

    private Close() {
        this.dialog = false;
    }

}
</script>

<style scoped>

</style>