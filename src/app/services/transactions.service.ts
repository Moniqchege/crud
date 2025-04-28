import { Injectable } from '@angular/core';
import { AtmCardService } from './atm-card.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private localStorageKey = 'transactions';

  constructor(private atmCardService: AtmCardService) {}

  createTransaction(transaction: any): void {
    const transactions = this.getTransactions();
    transactions.push(transaction);
    localStorage.setItem(this.localStorageKey, JSON.stringify(transactions));

    const account = this.atmCardService
      .getAtmCards()
      .find((card) => card.id === transaction.atmCardId);
    const accountBalance = this.updateAccountBalance(account, transaction);
  }

  getTransactions(): any[] {
    const transactions = localStorage.getItem(this.localStorageKey);
    return transactions ? JSON.parse(transactions) : [];
  }

  reverseTransaction(transactionId: string): void {
    const transactions = this.getTransactions();
    const transaction = transactions.find((txn) => txn.id === transactionId);
    if (transaction) {
      transaction.amount = -transaction.amount;
      transaction.type =
        transaction.type === 'deposit' ? 'withdrawal' : 'deposit';
      localStorage.setItem(this.localStorageKey, JSON.stringify(transactions));
    }
  }

  deleteTransaction(transactionId: string): void {
    let transactions = this.getTransactions();
    transactions = transactions.filter((txn) => txn.id !== transactionId);
    localStorage.setItem(this.localStorageKey, JSON.stringify(transactions));
  }

  private updateAccountBalance(account: any, transaction: any): number {
    let newBalance =
      account.balance +
      (transaction.type === 'deposit'
        ? transaction.amount
        : -transaction.amount);

    return newBalance;
  }
}
