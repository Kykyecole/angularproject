import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetPageComponent } from './carnet-page.component';

describe('CarnetPageComponent', () => {
  let component: CarnetPageComponent;
  let fixture: ComponentFixture<CarnetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
