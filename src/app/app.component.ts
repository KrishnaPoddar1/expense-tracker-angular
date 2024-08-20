import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ExpenseAddFormComponent } from "./expense-add-form/expense-add-form.component";
import { ExpenseDisplayListComponent } from "./expense-display-list/expense-display-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpenseAddFormComponent, ExpenseDisplayListComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expense-tracker';
}
