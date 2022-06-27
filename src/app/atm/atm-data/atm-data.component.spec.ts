import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmDataComponent } from './atm-data.component';

describe('AtmDataComponent', () => {
  let component: AtmDataComponent;
  let fixture: ComponentFixture<AtmDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
