import {UserSex} from "../api/protcol/user/UserSex";
<template>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {ApiClient} from '@/api/ApiClient';
import {UserSex} from '@/api/protcol/user/UserSex';

@Component
export default class TestPage extends Vue {
    public async created() {
        const api = new ApiClient();
        // console.log(api.GetPrivateUser('hoge'));
        // console.log(await api.CreateUser({
        //     user_name: "hoge_san",
        //     sex: UserSex.Men,
        //     pass: "abcdefg1234",
        //     birthday: "1980-01-01"
        // }));
    }
}
</script>

<style scoped>

</style>
