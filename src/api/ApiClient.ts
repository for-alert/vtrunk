import * as Axios from 'axios';
import {AxiosInstance} from 'axios';
import {PublicUser} from '@/api/protcol/user/PublicUser';
import {PrivateUser} from '@/api/protcol/user/PrivateUser';
import {CreateUser} from '@/api/protcol/user/CreateUser';

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

    public async FindStoreName(name: string) {
        const res = await this.client.get('/find_store_name/', {params: {name}});
        return res.data;
    }
}
