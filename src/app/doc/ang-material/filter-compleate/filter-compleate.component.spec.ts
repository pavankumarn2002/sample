import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCompleateComponent } from './filter-compleate.component';

describe('FilterCompleateComponent', () => {
  let component: FilterCompleateComponent;
  let fixture: ComponentFixture<FilterCompleateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCompleateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCompleateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
