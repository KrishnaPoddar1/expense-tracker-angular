import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-add-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './expense-add-form.component.html',
  styleUrl: './expense-add-form.component.css'
})
export class ExpenseAddFormComponent {
  description: string='';
  amount: number=0;
  category: string='food';
  date: string='';

  constructor(private expenseService: ExpenseService){}

  onFormSubmit(){
    const newExpense:Expense =  {
      id:1,
      description:this.description,
      amount:this.amount,
      category:this.category,
      date:this.date
    }

    this.expenseService.addExpense(newExpense);
    this.description = '';
    this.amount = 0;
    this.category = 'food';
    this.date = '';
  }

}
