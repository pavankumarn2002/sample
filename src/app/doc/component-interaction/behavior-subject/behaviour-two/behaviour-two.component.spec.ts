import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourTwoComponent } from './behaviour-two.component';

describe('BehaviourTwoComponent', () => {
  let component: BehaviourTwoComponent;
  let fixture: ComponentFixture<BehaviourTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviourTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviourTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
