import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/components/account/account.component';
import { TransactionsComponent } from 'src/app/components/transactions/transactions.component';
import { RegisterComponent } from 'src/app/components/register/register.component'; // new
import { LoginComponent } from 'src/app/components/login/login.component'; // new
import { MoneyComponent } from 'src/app/components/money/money.component'; // new


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: AccountComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'register', component: RegisterComponent }, // new
  { path: 'login', component: LoginComponent }, // new
  { path: 'money', component: MoneyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
