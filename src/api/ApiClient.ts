import * as Axios from 'axios';
import {AxiosInstance} from 'axios';
import {PublicUser} from '@/api/protcol/user/PublicUser';
import {PrivateUser} from '@/api/protcol/user/PrivateUser';
import {CreateUser} from '@/api/protcol/user/CreateUser';
import {AddStoreResult} from '@/api/protcol/store/AddStoreResult';

import {GetStore, Store} from '@/api/protcol/store/Store';

import {RandomBattle} from '@/api/protcol/battle/RandomBattle';

export class ApiClient {
    private serverUrl: string;
    private client: AxiosInstance;

    constructor() {
        this.serverUrl = process.env.VUE_APP_SERVER_URL;
        this.client = Axios.default.create({
            baseURL: this.serverUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            responseType: 'json',
        });
    }

    public async GetPublicUsers(): Promise<PublicUser[]> {
        const res = await this.client.get('/public_users');
        return res.data;
    }

    public async GetPublicUserByToken(token: string): Promise<PublicUser> {
        const res = await this.client.post('/public_user_from_token', {token});
        return res.data;
    }

    public async GetPrivateUser(token: string): Promise<PrivateUser> {
        const res = await this.client.post('/private_user', {token});
        return res.data;
    }

    public async CreateUser(user: CreateUser): Promise<string> {
        const res = await this.client.post('/register_user', user);
        return res.data;
    }

    public async LoginUser(pass: string, userName: string): Promise<string> {
        const res = await this.client.post('/login_user', {pass, user_name: userName});
        return res.data;
    }

    public async FindStoreName(name: string): Promise<Store[]> {
        const res = await this.client.get('/find_store_name/', {params: {name}});
        return res.data;
    }

    public async AddStore(id: string, token: string, file: string, message: string): Promise<AddStoreResult> {
        const res = await this.client.post('/add_store', {id, token, file, message});
        return res.data;
    }

    public async GetStores(): Promise<GetStore[]> {
        const res = await this.client.get('/stores');
        return res.data;
    }

    public async RandomBattle(token: string): Promise<RandomBattle> {
        const res = await this.client.post('/random_battle', {token});
        return res.data;
    }

    public async Favo(token: string, storeId: number) {
        const res = await this.client.post('/favo', {token, storeId});
        return res.data;
    }

    public async FavoCnt(storeId: number) {
        const res = await this.client.get('/store_of_favo', {params: {storeId}});
        return res.data;
    }
}
