import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAddFormComponent } from './expense-add-form.component';

describe('ExpenseAddFormComponent', () => {
  let component: ExpenseAddFormComponent;
  let fixture: ComponentFixture<ExpenseAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
