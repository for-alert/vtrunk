<template>
    <div>
        <h1>店舗追加</h1>
        <div v-for="store in stores">
            <div class="form-group">
                <label for="searchStore">店名</label>
                <div class="col-sm-10">
                    <input id="searchStore" class="form-control" type="text" v-model="searchStore" required/>
                </div>
            </div>

            <div>
                <div v-for="store in stores">
                    <div class="card-body">
                        <p class="user-info">ユーザ名：{{store.name}}　level：{{store.address}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Store from '@/api/protcol/store/Store';

@Component
export default class AddStore extends Vue {
    private stores: Store[] = [];
    private dialog = false;
    private searchStore = '';

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