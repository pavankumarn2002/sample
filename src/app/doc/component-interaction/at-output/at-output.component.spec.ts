import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOutputComponent } from './at-output.component';

describe('AtOutputComponent', () => {
  let component: AtOutputComponent;
  let fixture: ComponentFixture<AtOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
