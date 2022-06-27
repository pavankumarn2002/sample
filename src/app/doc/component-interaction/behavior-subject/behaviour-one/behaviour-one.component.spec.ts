import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourOneComponent } from './behaviour-one.component';

describe('BehaviourOneComponent', () => {
  let component: BehaviourOneComponent;
  let fixture: ComponentFixture<BehaviourOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviourOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviourOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
