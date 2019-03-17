<template>
    <div id="map">
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
    import 'bingmaps';
    import {Store} from '@/api/protcol/store/Store';

    @Component({
    props: {
        stores: Array,
        pos: Array,
    },
})
export default class MapView extends Vue {
    private stores: Store[];
    private pos: any[];
    private map: Microsoft.Maps.Map | null = null;

    public mounted() {
        const token = this.$cookies.get('user_token');
        if (token) {
            const pos = new Microsoft.Maps.Location(this.pos[0].coords.latitude, this.pos[0].coords.longitude);
            if (this.map) {
                this.map.dispose();
            }
            this.map = new Microsoft.Maps.Map('#map', {
                credentials: 'AizjfRpuOsvfOpcPlLzrQtMrdxBxXi8xlbJUrfMv8ibleQ4pAhrQtZLIMwX3iLVj',
                center: pos,
            });
            this.map.entities.push(this.stores.map((d) => {
                return new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(d.latitude, d.longitude), {color: 'red'});
            }));
        }
    }
}
</script>

<style scoped>
    #map {
        height: 500px;
        margin-bottom: 20px;
    }
</style>
