import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectThreeComponent } from './subject-three.component';

describe('SubjectThreeComponent', () => {
  let component: SubjectThreeComponent;
  let fixture: ComponentFixture<SubjectThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
