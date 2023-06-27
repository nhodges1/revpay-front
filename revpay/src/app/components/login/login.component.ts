import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private accountService: AccountService, private router: Router) { }

  onSubmit(form: NgForm) {
    this.accountService.login(form.value.username, form.value.password)
      .subscribe(account => {
        if (account) {
          // Navigate to the transactions page
          this.router.navigate(['/transactions']);
        } else {
          // show error message
        }
      });
  }
}
