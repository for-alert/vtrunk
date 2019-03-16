import {UserSex} from '@/api/protcol/user/UserSex';

export interface CreateUser {
    user_name: string;
    sex: UserSex;
    pass: string;
    birthday: string;
}
