<template>
    <div>
        <div v-for="store in stores">
            <store :store="store" :user="users.find(u=>u.userId==store.userId)"/>
            <br>
        </div>

    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {ApiClient} from '@/api/ApiClient';
import {GetStore} from '@/api/protcol/store/Store';
import Store from '@/components/Stores/Store';
import {PublicUser} from '@/api/protcol/user/PublicUser';

@Component({components: {Store}})
export default class Stores extends Vue {
    private stores: GetStore[] = [];
    private users: PublicUser[] = [];

    private async created() {
        this.users = await new ApiClient().GetPublicUsers();
        this.stores = await new ApiClient().GetStores();
    }
}
</script>

<style lang="scss">
    pict {
        height: 50px;
        width: 50px;
    }

</style>
