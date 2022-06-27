import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameOneComponent } from './name-one.component';

describe('NameOneComponent', () => {
  let component: NameOneComponent;
  let fixture: ComponentFixture<NameOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
