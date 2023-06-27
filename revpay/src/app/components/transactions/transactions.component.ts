import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransactionService, Transaction } from 'src/app/services/transaction.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService, private accountService: AccountService) { }

  ngOnInit() {
    this.getTransactions();
  }

  onSubmit(form: NgForm) {
    this.accountService.account$.subscribe(account => {
      if (account) {
        const senderId = account.id;
        this.accountService.sendMoney(senderId, form.value.receiver, form.value.amount)
          .subscribe(response => {
            this.getTransactions();
          });
      } else {
      }
    });
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    });
  }
}
