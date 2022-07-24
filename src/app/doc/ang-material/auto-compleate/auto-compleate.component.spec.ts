import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleateComponent } from './auto-compleate.component';

describe('AutoCompleateComponent', () => {
  let component: AutoCompleateComponent;
  let fixture: ComponentFixture<AutoCompleateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCompleateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
