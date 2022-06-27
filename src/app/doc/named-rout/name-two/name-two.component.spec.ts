import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTwoComponent } from './name-two.component';

describe('NameTwoComponent', () => {
  let component: NameTwoComponent;
  let fixture: ComponentFixture<NameTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
