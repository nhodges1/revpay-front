import { Account } from 'src/app/models/account';

export interface Transaction {
    id: number;
    sender: Account;
    receiver: Account;
    amount: number;
}
