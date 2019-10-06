import {WalletModel} from './wallet-model';

export interface UserModel extends WalletModel {
  id: number;
  name: string;
  desc: string;
  email: string;
  wallet: WalletModel[];
  max: number;
}
