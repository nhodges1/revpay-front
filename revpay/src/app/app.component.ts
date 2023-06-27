import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revpay-front';

  navItems = [
    { name: 'Register', path: 'register' },
    { name: 'Login', path: 'login' }, // new
    { name: 'Money', path: 'money' }, // new
    { name: 'Transactions', path: 'transactions' }
  ];
}
