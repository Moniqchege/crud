import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  imports: [FormsModule, CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers: any[] = [];
  editMode = false;
  customer = {
    id: '',
    name: '',
    email: '',
    phone: ''
  };

  constructor(
    private storageService: StorageService
  ){this.loadCustomers}

  ngOnInit () {
    this.customers = this.storageService.getItem('cutomers');
  }

  saveCustomer(){
    if(this.editMode) {
      const index = this.customers.findIndex(
        c => c.id === this.customer.id
      );
      if( index !== 1 ) this.customers[index] = { ...this.customer };
    } else {
      this.customer.id = crypto.randomUUID();
      this.customers.push({ ...this.customer });
    }

    this.storageService.setItem('customers', this.customers);
    this.resetForm();
  }

  editCustomer(cust:any) {
    this.customer = { ...cust };
    this.editMode = true;
  }

  deleteCustomer(id: string) {
    this.customers = this.customers.filter(c => c.id !== id);
    this.storageService.setItem( 'customers', this.customers)
  }

  loadCustomers() {
    const stored = localStorage.getItem('customers');
    if (stored) {
      this.customers = JSON.parse(stored);
    }
  }

  resetForm() {
    this.customer = { id: '', name: '', email: '', phone: ''};
    this.editMode = false;
  }
}
