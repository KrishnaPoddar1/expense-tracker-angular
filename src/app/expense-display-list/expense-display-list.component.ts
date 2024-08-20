import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-display-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-display-list.component.html',
  styleUrl: './expense-display-list.component.css'
})
export class ExpenseDisplayListComponent implements OnInit{
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenses = this.expenseService.getExpense();
  }

  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id);
    this.expenses = this.expenseService.getExpense();
  }


}
