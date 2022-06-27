import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedRoutComponent } from './named-rout.component';

describe('NamedRoutComponent', () => {
  let component: NamedRoutComponent;
  let fixture: ComponentFixture<NamedRoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedRoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
