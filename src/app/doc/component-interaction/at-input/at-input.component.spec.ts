import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtInputComponent } from './at-input.component';

describe('AtInputComponent', () => {
  let component: AtInputComponent;
  let fixture: ComponentFixture<AtInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
