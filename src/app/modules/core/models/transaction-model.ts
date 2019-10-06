export interface TransactionModel {
  id: number;
  amount: number;
  type: string;
  sender_id: number;
  recieve_id: number;
  state: string;
  created: string;
  processed: string;
}
