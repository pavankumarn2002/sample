import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRoutsComponent } from './navigation-routs.component';

describe('NavigationRoutsComponent', () => {
  let component: NavigationRoutsComponent;
  let fixture: ComponentFixture<NavigationRoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationRoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationRoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
