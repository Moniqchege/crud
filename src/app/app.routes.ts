import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AtmCardsComponent } from './atm-cards/atm-cards.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const routes: Routes = [
    {
        path: 'customers',
        component: CustomersComponent
    },
    {
        path: 'accounts',
        component: AccountsComponent
    },
    {
        path: 'atm-cards',
        component: AtmCardsComponent
    },
    {
        path: 'transactions',
        component: TransactionsComponent
    }
];
