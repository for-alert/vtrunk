<template>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {ApiClient} from '@/api/ApiClient';

@Component
export default class TestPage extends Vue {
    public created() {
        const api = new ApiClient();
        // console.log(api.GetPrivateUser('hoge'));
    }
}
</script>

<style scoped>

</style>
