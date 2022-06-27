import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameteraisedRoutComponent } from './parameteraised-rout.component';

describe('ParameteraisedRoutComponent', () => {
  let component: ParameteraisedRoutComponent;
  let fixture: ComponentFixture<ParameteraisedRoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameteraisedRoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameteraisedRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
