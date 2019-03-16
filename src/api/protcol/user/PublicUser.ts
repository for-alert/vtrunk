import {UserSex} from '@/api/protcol/user/UserSex';

export interface PublicUser {
    userId: number;
    userName: string;
    sex: UserSex;
    birthday: string;
    nextExp: number;
    level: number;
    exp: number;
}
