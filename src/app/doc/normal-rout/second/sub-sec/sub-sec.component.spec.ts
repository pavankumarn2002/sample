import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSecComponent } from './sub-sec.component';

describe('SubSecComponent', () => {
  let component: SubSecComponent;
  let fixture: ComponentFixture<SubSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
