<template>
    <div>
        <div class="card-body">
            <p class="store-info">店名：{{store.name}}　住所：{{store.address}}</p>
            <button @click="OnButtonClick">追加</button>
        </div>
    </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Store from '@/api/protcol/store/Store';
import {ApiClient} from '@/api/ApiClient';

@Component({
    props: {
        store: Object,
    },
})
export default class AddStore extends Vue {
    private store!: Store;

    public OnButtonClick() {
        this.$emit('addStore');
    }
}
</script>

<style scoped>

</style>