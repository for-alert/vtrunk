<template>
    <div>
        <h1>店舗追加</h1>
        <div class="form-group">
            <label for="searchStore">店名</label>
            <div class="col-sm-10">
                <input id="searchStore" class="form-control" type="text" v-model="searchStore" required/>
                <button @click="OnButtonClick">検索</button>
            </div>
        </div>

        <div>
            <div v-for="store in stores">
                <store-vue :store="store" @addStore="OnAddStore(store.id)"/>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Store from '@/api/protcol/store/Store';
import StoreVue from '@/components/AddStore/Store';
import {ApiClient} from '@/api/ApiClient';

@Component({components: {StoreVue}})
export default class AddStore extends Vue {
    private stores: Store[] = [];
    private searchStore = '';

    private async OnButtonClick() {
        this.stores = await new ApiClient().FindStoreName(this.searchStore);
    }

    private OnAddStore(id: number) {
        alert(id);
    }
}
</script>

<style scoped>

</style>