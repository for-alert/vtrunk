import {ApiClient} from '@/api/ApiClient';
import {Vue} from 'vue-property-decorator';

export default async function CheckLogin(vue: Vue) {
    if (vue.$cookies.get('user_token')) {
        const logined = !!(await new ApiClient().GetPublicUserByToken(vue.$cookies.get('user_token')));
        if (logined === false) {
            vue.$router.push('/notlogin');
        }
    } else {
        vue.$router.push('/notlogin');
    }
}
