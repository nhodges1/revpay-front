import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoneyComponent } from './components/money/money.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AccountComponent } from './components/account/account.component';

import { AccountService } from './services/account.service';
import { TransactionService } from './services/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MoneyComponent,
    TransactionsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
