import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDisplayListComponent } from './expense-display-list.component';

describe('ExpenseDisplayListComponent', () => {
  let component: ExpenseDisplayListComponent;
  let fixture: ComponentFixture<ExpenseDisplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseDisplayListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
