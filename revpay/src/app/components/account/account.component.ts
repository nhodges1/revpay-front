import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service'
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  register(accounts: Account) {
    this.accountService.register(accounts).subscribe(newAccount => {
      // handle response
    });
  }

  login(username: string, password: string) {
    this.accountService.login(username, password).subscribe(account => {
      // handle response
    });
  }

  sendMoney(senderId: number, receiverId: number, amount: number) {
    this.accountService.sendMoney(senderId, receiverId, amount).subscribe(response => {
      // handle response
    });
  }

  requestMoney(requesterUsername: string, giverUsername: string, amount: number) {
    this.accountService.requestMoney(requesterUsername, giverUsername, amount).subscribe(response => {
      // handle response
    });
  }

  getAllUsers() {
    this.accountService.getAllUsers().subscribe(accounts => {
      this.accounts = accounts;
    });
  }
}
