<template>
    <div>
        <h2>{{store.name}}</h2>
        <h2>{{store.address}}</h2>
        <h3>メッセージ</h3>
        <v-textarea v-model="message"></v-textarea>
        <h3>写真</h3>
        <input type="file" ref="pictureInput"/>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="green darken-1"
                    flat="flat"
                    @click="OnButtonClick()"
            >
                送信
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Store from '@/api/protcol/store/Store';
    import SendStoreVue from '@/components/AddStore/SendStore';
    import {ApiClient} from '@/api/ApiClient';

    @Component({
        props: {
            store: Object,
        },
        components: {
            SendStoreVue,
        },
    })
    export default class SendStore extends Vue {
        private message = '';
        private store !: Store;


        public OnButtonClick() {
            if (!this.$refs.pictureInput.files.length) {
                return;
            }
            const file = this.$refs.pictureInput.files[0];
            const fr = new FileReader();
            fr.onload = (evt) => {
                new ApiClient().AddStore(this.store.id, this.$cookies.get('user_token'), evt.target.result, this.message);
            };
            fr.readAsDataURL(file);

            // this.$emit('send-store', id);

        }
    }
</script>

<style scoped>

</style>