import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmTransactionComponent } from './atm-transaction.component';

describe('AtmTransactionComponent', () => {
  let component: AtmTransactionComponent;
  let fixture: ComponentFixture<AtmTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
