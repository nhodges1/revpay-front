import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revpay-front';

  navItems = [
    { name: 'Accounts', path: 'accounts' },
    { name: 'Transactions', path: 'transactions' },
    { name: 'Register', path: 'register' }, // new
    { name: 'Login', path: 'login' }, // new
    { name: 'Money', path: 'money' }, // new
  ];
}
