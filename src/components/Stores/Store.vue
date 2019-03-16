<template>
    <div>
        <v-card>
            <v-card-title>{{store.storeName}}</v-card-title>
            <v-card-title>{{store.address}}</v-card-title>
            <v-card-text>{{user.userName}}</v-card-text>
            <v-card-text>{{store.message}}</v-card-text>
            <v-responsive><img :src="store.picture"></v-responsive>
        </v-card>
    </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {GetStore} from '@/api/protcol/store/Store';
import {PublicUser} from '@/api/protcol/user/PublicUser';

@Component({
    props: {
        store: Object,
        user: Object,
    },
})
export default class Store extends Vue {
    private store!: GetStore;
    private user!: PublicUser;
}
</script>

<style lang="scss">
    div {
        font-size: large;
    }

</style>