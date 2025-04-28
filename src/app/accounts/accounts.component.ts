import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent {
  accounts: any[] = [];
  customers: any[] = []; // to load customers for selection
  account: any = {};
  editMode = false;

  constructor() {
    this.loadAccounts();
    this.loadCustomers();
  }

  saveAccount() {
    if (this.editMode) {
      this.accounts = this.accounts.map(acc => acc.id === this.account.id ? this.account : acc);
      this.editMode = false;
    } else {
      this.account.id = Date.now();
      this.account.balance = 0;
      this.accounts.push({ ...this.account });
    }

    this.saveToLocalStorage();
    this.resetForm();
  }

  saveToLocalStorage() {
    localStorage.setItem('accounts', JSON.stringify(this.accounts));
  }

  loadAccounts() {
    const stored = localStorage.getItem('accounts');
    if (stored) {
      this.accounts = JSON.parse(stored);
    }
  }

  loadCustomers() {
    const stored = localStorage.getItem('customers');
    if (stored) {
      this.customers = JSON.parse(stored);
    }
  }

  editAccount(acc: any) {
    this.account = { ...acc };
    this.editMode = true;
  }

  deleteAccount(id: number) {
    this.accounts = this.accounts.filter(acc => acc.id !== id);
    this.saveToLocalStorage();
  }

  resetForm() {
    this.account = {};
    this.editMode = false;
  }
}
