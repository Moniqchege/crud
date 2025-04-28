import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transactions.service';
import { AtmCardService } from '../services/atm-card.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [FormsModule, CommonModule],
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
  public transactions: any[] = [];
  public transaction = { atmCardId: '', amount: 0, type: 'deposit' };

  constructor(
    public transactionService: TransactionService,
    public atmCardService: AtmCardService
  ) {}

  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactions();
  }

  createTransaction() {
    const newTransaction = {
      ...this.transaction,
      id: new Date().getTime().toString(),
      date: new Date().toISOString(),
    };
    this.transactionService.createTransaction(newTransaction);
    this.transactions = this.transactionService.getTransactions();
    alert('Transaction Created!');
  }

  reverseTransaction(transactionId: string) {
    this.transactionService.reverseTransaction(transactionId);
    this.transactions = this.transactionService.getTransactions();
    alert('Transaction Reversed!');
  }

  deleteTransaction(transactionId: string) {
    this.transactionService.deleteTransaction(transactionId);
    this.transactions = this.transactionService.getTransactions();
    alert('Transaction Deleted!');
  }
}
