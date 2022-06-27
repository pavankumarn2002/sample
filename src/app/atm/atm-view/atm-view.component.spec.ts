import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmViewComponent } from './atm-view.component';

describe('AtmViewComponent', () => {
  let component: AtmViewComponent;
  let fixture: ComponentFixture<AtmViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
