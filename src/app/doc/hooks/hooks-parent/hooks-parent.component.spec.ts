import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksParentComponent } from './hooks-parent.component';

describe('HooksParentComponent', () => {
  let component: HooksParentComponent;
  let fixture: ComponentFixture<HooksParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HooksParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
