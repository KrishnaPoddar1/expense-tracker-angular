import { Routes } from '@angular/router';
import { ExpenseAddFormComponent } from './expense-add-form/expense-add-form.component';
import { ExpenseDisplayListComponent } from './expense-display-list/expense-display-list.component';

export const routes: Routes = [
    {
        path:'',
        component:ExpenseAddFormComponent,
        title:'Add Expense'
    },
    {
        path:'display',
        component:ExpenseDisplayListComponent,
        title:'Display Expense'
    }
];
