import {BattleResult} from '@/api/protcol/battle/BattleResult';
import {PublicUser} from '@/api/protcol/user/PublicUser';

export interface RandomBattle {
    win: boolean;
    levelUp: BattleResult | null;
    battleUser: PublicUser;
}
