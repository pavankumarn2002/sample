import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProgressbarComponent } from './show-progressbar.component';

describe('ShowProgressbarComponent', () => {
  let component: ShowProgressbarComponent;
  let fixture: ComponentFixture<ShowProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProgressbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
