import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private accountService: AccountService) {} 

  onSubmit(form: NgForm) {
    this.accountService.register(form.value).subscribe(account => {
    });
  }
}
