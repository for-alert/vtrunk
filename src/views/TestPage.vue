<template>
    <div id="map">
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import 'bingmaps';

@Component
export default class TestPage extends Vue {
    public mounted() {
        const map = new Microsoft.Maps.Map('#map', {
            credentials: 'AizjfRpuOsvfOpcPlLzrQtMrdxBxXi8xlbJUrfMv8ibleQ4pAhrQtZLIMwX3iLVj',
            center: new Microsoft.Maps.Location(),
        });
    }
}
</script>

<style scoped>

</style>
