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

    public async GetPrivateUser(token: string): Promise<PrivateUser> {
        const res = await this.client.post('/private_user', {token});
        return res.data;
    }

    public async CreateUser(user: CreateUser): Promise<string> {
        const res = await this.client.post('/register_user', user);
        return res.data;
    }
}
