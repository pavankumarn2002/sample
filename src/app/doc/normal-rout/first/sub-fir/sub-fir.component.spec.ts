import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFirComponent } from './sub-fir.component';

describe('SubFirComponent', () => {
  let component: SubFirComponent;
  let fixture: ComponentFixture<SubFirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
