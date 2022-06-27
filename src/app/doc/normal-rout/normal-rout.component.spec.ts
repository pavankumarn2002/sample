import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalRoutComponent } from './normal-rout.component';

describe('NormalRoutComponent', () => {
  let component: NormalRoutComponent;
  let fixture: ComponentFixture<NormalRoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalRoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
