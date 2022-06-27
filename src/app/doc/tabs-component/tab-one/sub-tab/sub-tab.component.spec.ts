import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTabComponent } from './sub-tab.component';

describe('SubTabComponent', () => {
  let component: SubTabComponent;
  let fixture: ComponentFixture<SubTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
