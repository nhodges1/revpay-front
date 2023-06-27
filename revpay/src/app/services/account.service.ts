import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountSubject = new BehaviorSubject<Account | undefined>(undefined);
  account$ = this.accountSubject.asObservable();

  constructor(private http: HttpClient) { }

  register(account: Account) {
    return this.http.post<Account>('/accounts/register', account);
  }

  login(username: string, password: string) {
    return this.http.post<Account>('/accounts/login', {username, password})
      .pipe(
        tap(account => {
          this.accountSubject.next(account);
        })
      );
  }

  logout() {
    this.accountSubject.next(undefined);
    // Also remove token from local storage or any other cleanup you need to do
  }

// UserService
sendMoney(senderId: number, receiverId: number, amount: number): Observable<any> {
  return this.http.post<any>('/accounts/send', {senderId, receiverId, amount});
}


  requestMoney(requesterUsername: string, giverUsername: string, amount: number) {
    return this.http.post<string>('/accounts/request', {requesterUsername, giverUsername, amount});
  }

  getAllUsers() {
    return this.http.get<Account[]>('/accounts/all');
  }

  getUserByUsername(username: string): Observable<Account> {
    return this.http.get<Account>(`/accounts/username/${username}`);
  }
}
