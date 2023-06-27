import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  id: number;
  sender: { id: number };
  receiver: { id: number };
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiBaseUrl = 'http://localhost:9000/api/transactions';

  constructor(private http: HttpClient) { }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiBaseUrl, transaction);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiBaseUrl);
  }

  sendMoney(senderId: number, receiverId: number, amount: number) {
    const payload = {
        sender: { id: senderId },
        receiver: { id: receiverId },
        amount: amount
    };
    return this.http.post<string>('/accounts/send', payload);
  }
}

