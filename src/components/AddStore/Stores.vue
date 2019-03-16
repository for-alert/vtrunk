<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <v-card v-for="store in stores" hover @click="OnButtonClick(store.name,store.address,store.id)">
                    <div>
                        <p>店名 : {{store.name}}</p>
                        <p>住所 : {{store.address}}</p>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Store from '@/api/protcol/store/Store';
import StoreVue from '@/components/AddStore/Stores';

@Component({
    props: {
        stores: Array,
    },
    components: {
        StoreVue,
    },
})
export default class Stores extends Vue {
    private stores!: Store[];
    private firstSearch = false;

    public OnButtonClick(name: string, address: string, id: string) {
        this.$emit('add-store', name, address, id);
    }
}
</script>

<style scoped>

</style>