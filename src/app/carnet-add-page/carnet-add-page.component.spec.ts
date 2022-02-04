import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetAddPageComponent } from './carnet-add-page.component';

describe('CarnetAddPageComponent', () => {
  let component: CarnetAddPageComponent;
  let fixture: ComponentFixture<CarnetAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
