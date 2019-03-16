<template>
    <div>
        <h1>マイページ</h1>
        <p>ユーザ名 : {{userName}}</p>
        <p>性別 : {{sex}}</p>
        <p>誕生日 : {{birthday}}</p>
        <p>レベル : {{level}}</p>
        <p>経験値 : {{exp}}</p>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class User extends Vue {
    private userName = 'hoge';
    private sex = 'ネカマ';
    private birthday = '9999/99/99';
    private  level = 1;
    private exp = 0;

}
</script>

<style scoped>

</style>
