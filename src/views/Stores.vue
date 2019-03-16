<template>
    <div>
        <div v-for="store in stores">
            {{store.storeName}}
            <img :src="store.picture">
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {ApiClient} from '@/api/ApiClient';
    import {GetStore} from '@/api/protcol/store/Store';

    @Component
    export default class Stores extends Vue {
        private stores: GetStore[] = [];

        private async created() {
            this.stores = await new ApiClient().GetStores();
        }
    }
</script>

<style scoped>

</style>
