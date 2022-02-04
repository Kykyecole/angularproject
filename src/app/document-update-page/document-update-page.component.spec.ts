import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUpdatePageComponent } from './document-update-page.component';

describe('DocumentUpdatePageComponent', () => {
  let component: DocumentUpdatePageComponent;
  let fixture: ComponentFixture<DocumentUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentUpdatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
