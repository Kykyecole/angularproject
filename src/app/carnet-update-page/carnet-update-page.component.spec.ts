import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetUpdatePageComponent } from './carnet-update-page.component';

describe('CarnetUpdatePageComponent', () => {
  let component: CarnetUpdatePageComponent;
  let fixture: ComponentFixture<CarnetUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetUpdatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
