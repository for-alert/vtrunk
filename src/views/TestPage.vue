import {UserSex} from "../api/protcol/user/UserSex";
<template>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {ApiClient} from '@/api/ApiClient';
import {UserSex} from '@/api/protcol/user/UserSex';
import {GetStore} from '@/api/protcol/store/Store';
import {Store} from '@/api/protcol/store/Store';

@Component
export default class TestPage extends Vue {
    public async created() {
        const api = new ApiClient();
        // console.log(await api.GetPrivateUser('hoge'));
        // console.log(await api.CreateUser({
        //     user_name: "hoge_san",
        //     sex: UserSex.Men,
        //     pass: "abcdefg1234",
        //     birthday: "1980-01-01"
        // }));
        // console.log(await api.LoginUser('1234567890', 'hiroki'));
        // const token = await api.LoginUser('1234567890', 'hiroki');
        // console.log(await api.GetPublicUserByToken(token));
        // console.log(await api.FindStoreName('マクドナルド'));
        // const Store = await api.AddStore("e837193", token));
        // console.log(await api.RandomBattle(token));
        // console.log(await api.Favo(token,Store.$id))
    }
}
</script>

<style scoped>

</style>
