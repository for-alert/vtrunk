<template>
    <div id="map">
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import 'bingmaps';

@Component
export default class MapView extends Vue {
    public mounted() {
        const token = this.$cookies.get('user_token');
        if (token) {
            navigator.geolocation.getCurrentPosition(((p) => {
                const pos = new Microsoft.Maps.Location(p.coords.latitude, p.coords.longitude);
                const map = new Microsoft.Maps.Map('#map', {
                    credentials: 'AizjfRpuOsvfOpcPlLzrQtMrdxBxXi8xlbJUrfMv8ibleQ4pAhrQtZLIMwX3iLVj',
                    center: pos,
                });
            }));
        }
    }
}
</script>

<style scoped>

</style>
