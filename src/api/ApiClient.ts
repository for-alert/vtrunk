import * as Axios from 'axios';
import {AxiosInstance} from 'axios';
import {User} from '@/api/protcol/User';

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

    public async get_public_users(): Promise<User[]> {
        const req = await this.client.get('/public_users');
        return req.data;
    }
}
