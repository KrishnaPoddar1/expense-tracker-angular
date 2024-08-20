import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expense:Expense[] = [];
  private nextId:number = 1;

  constructor() { }

  getExpense():Expense[]{
    return this.expense;
  }

  addExpense(expense:Expense):void{
    expense.id = this.nextId++;
    this.expense.push(expense);
  }

  deleteExpense(id:number):void{
    this.expense = this.expense.filter((exp)=> exp.id !== id);
  }
}
