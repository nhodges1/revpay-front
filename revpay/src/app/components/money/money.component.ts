import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent {
  constructor(private accountService: AccountService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.accountService.getUserByUsername(form.value.sender).pipe(
        switchMap(sender => 
          this.accountService.getUserByUsername(form.value.receiver).pipe(
            switchMap(receiver => 
              this.accountService.sendMoney(sender.id, receiver.id, form.value.amount)
            )
          )
        )
      ).subscribe(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
    }
  }

  onSubmit1(form: NgForm) {
    this.accountService.requestMoney(form.value.sender, form.value.receiver, form.value.amount)
      .subscribe(response => {
        // handle response here
      });
  }
}
